/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www2.faccat.br",
      },
    ],
  },
};

module.exports = nextConfig;
