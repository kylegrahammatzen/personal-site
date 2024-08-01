/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bans.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
