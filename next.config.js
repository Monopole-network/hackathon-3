/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['ipfs-2.thirdwebcdn.com', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
