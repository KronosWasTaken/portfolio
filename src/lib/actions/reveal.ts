const observerMap = new Map<number, IntersectionObserver>();
const pending = new Set<HTMLElement>();

function revealNode(node: HTMLElement) {
  node.style.opacity = '1';
  node.style.transform = 'translateY(0)';
  pending.delete(node);
}

// A fast scroll can jump a node from below the viewport to above it in one
// frame, so it never crosses the threshold and the observer never fires.
function checkPending() {
  for (const node of pending) {
    const rect = node.getBoundingClientRect();
    const alreadyPassed = rect.top < 0 || rect.bottom < 0;
    const inView = rect.top < window.innerHeight;
    if (alreadyPassed || inView) revealNode(node);
  }
}

let scrollScheduled = false;
function scheduleCheck() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => {
    scrollScheduled = false;
    checkPending();
  });
}

let listenersAttached = false;
function ensureListeners() {
  if (listenersAttached) return;
  listenersAttached = true;
  window.addEventListener('scroll', scheduleCheck, { passive: true });
  window.addEventListener('resize', scheduleCheck, { passive: true });
}

function getObserver(threshold: number) {
  if (observerMap.has(threshold)) return observerMap.get(threshold)!;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const node = entry.target as HTMLElement;
          revealNode(node);
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observerMap.set(threshold, observer);
  return observer;
}

export function reveal(
  node: HTMLElement,
  { delay = 0, duration = 600, distance = 20 }: { delay?: number; duration?: number; distance?: number } = {}
) {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { destroy() {} };
  }

  let destroyed = false;
  let observer: IntersectionObserver | null = null;

  requestAnimationFrame(() => {
    if (destroyed) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    node.style.opacity = '0';
    node.style.transform = `translateY(${distance}px)`;
    node.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
    node.dataset.duration = duration.toString();
    node.dataset.delay = delay.toString();

    // Track only after hiding, or a reveal that lands first gets stomped
    // back to hidden with nothing left watching to undo it.
    observer = getObserver(0.1);
    observer.observe(node);
    pending.add(node);
    ensureListeners();
    scheduleCheck();
  });

  return {
    destroy() {
      destroyed = true;
      observer?.unobserve(node);
      pending.delete(node);
    }
  };
}
