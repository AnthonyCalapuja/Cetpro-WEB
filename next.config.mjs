/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.24.240.1', 'localhost', '127.0.0.1'],
};

export default nextConfig;

