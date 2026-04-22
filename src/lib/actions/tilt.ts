export function tilt(node: HTMLElement, options = { max: 15, perspective: 1000, scale: 1.02 }) {
  let width = node.offsetWidth;
  let height = node.offsetHeight;
  let left = node.offsetLeft;
  let top = node.offsetTop;

  function updateDimensions() {
    const rect = node.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    left = rect.left + window.scrollX;
    top = rect.top + window.scrollY;
  }

  function handleMouseMove(e: MouseEvent) {
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const percentX = (x - centerX) / (width / 2);
    const percentY = (y - centerY) / (height / 2);

    const rotateX = percentY * -options.max;
    const rotateY = percentX * options.max;

    node.style.transform = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${options.scale}, ${options.scale}, ${options.scale})`;
  }

  function handleMouseEnter() {
    updateDimensions();
    node.style.transition = 'none';
  }

  function handleMouseLeave() {
    node.style.transition = 'transform 0.5s ease-out';
    node.style.transform = `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  node.addEventListener('mousemove', handleMouseMove);
  node.addEventListener('mouseenter', handleMouseEnter);
  node.addEventListener('mouseleave', handleMouseLeave);

  return {
    destroy() {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
}
