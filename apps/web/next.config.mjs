/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ["@repo/shared"],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
