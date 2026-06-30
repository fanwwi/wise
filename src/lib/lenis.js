import Lenis from "lenis";

export const initLenis = () => {
  // Проверка на серверный рендеринг
  if (typeof window === "undefined") return () => {};

  const lenis = new Lenis({
    lerp: 0.07,
    smoothWheel: true,
    syncTouch: true, // Добавлено для корректной работы на мобильных
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  const rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
};
