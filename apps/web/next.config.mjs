/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/yaroslavski',
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
    basePath: '/yaroslavski',
  },
};

export default nextConfig;
