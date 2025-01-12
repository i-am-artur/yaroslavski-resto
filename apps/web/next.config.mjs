/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/assortment',
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@repo/shared'],
  compiler: {
    styledComponents: true,
  },
  env: {
    basePath: '/assortment',
  },
};

export default nextConfig;
