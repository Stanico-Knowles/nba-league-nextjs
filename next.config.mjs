/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        port: "",
        pathname: "/i/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
