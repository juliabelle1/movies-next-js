/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: "",
        pathname: "/t/p/w440_and_h660_face/**",
      },
    ],
  },
};

module.exports = nextConfig;
