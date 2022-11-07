/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.website-files.com",
      "res.cloudinary.com",
      "agencyvista.com",
      "upcity-marketplace.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
