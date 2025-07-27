
import type { NextConfig } from 'next';


const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  assetPrefix: isProd ? 'https://arifabds.github.io/' : undefined,
  basePath: isProd ? '' : undefined, 
};

export default nextConfig;