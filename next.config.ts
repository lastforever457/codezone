import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  i18n, // Add i18n configuration here
};

export default nextConfig;
