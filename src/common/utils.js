export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
      if (timer = null) clearTimeout(timer);
      timer = setTimeout(() => {
          func.apply(this, args);
      }, delay);
  }
}
