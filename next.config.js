/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "images.oyoroomscdn.com",
      "media.istockphoto.com",
      "www.iconpacks.net",
    ],
  },
};

module.exports = nextConfig;
