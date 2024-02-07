/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'toolfix.webo.dev', 'toolfix.vercel.app', 'toolfixdev.webo.dev', 'toolfixstaging.webo.dev'],
  },
};

export default nextConfig;
