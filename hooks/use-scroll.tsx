import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    // Faqat client tomonida ishlaydi
    const handleScroll = () => {
      const x = window.scrollX;
      const y = window.scrollY;
      setScrollPosition({ x, y });

      // Ekran pastida ekanligini tekshirish
      setIsBottom(
        y + window.innerHeight === document.documentElement.scrollHeight
      );
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // scroll holatini aniqlash uchun bir martalik chaqirish
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return {
    scrollX: scrollPosition.x,
    scrollY: scrollPosition.y,
    isTop: scrollPosition.y === 0,
    isBottom,
  };
};

export default useScroll;
