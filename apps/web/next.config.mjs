/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/qr',
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
    basePath: '/qr',
  },
};

export default nextConfig;
