const observerMap = new Map();

function getObserver(threshold: number) {
  if (observerMap.has(threshold)) return observerMap.get(threshold);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const node = entry.target as HTMLElement;
          const { duration, delay } = node.dataset;
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
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

  requestAnimationFrame(() => {
    node.style.opacity = '0';
    node.style.transform = `translateY(${distance}px)`;
    node.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
    node.dataset.duration = duration.toString();
    node.dataset.delay = delay.toString();
  });

  const observer = getObserver(0.1);
  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
