/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dhakadoctor-sg.s3.amazonaws.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
