import { type RefObject, useRef, useEffect } from "react";
import type { SwiperRef } from "swiper/react";

export function useAutoSlide(
  swiperRef: RefObject<SwiperRef | null>,
  delay = 4000
) {
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, delay);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line
  }, []);

  return { startAutoSlide, stopAutoSlide };
}
