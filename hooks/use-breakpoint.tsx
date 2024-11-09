import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() => {
    if (typeof window !== 'undefined') {
      return getBreakpoint(window.innerWidth);
    }
    return 'xs';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

const getBreakpoint = (width: number) => {
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

export default useBreakpoint;
