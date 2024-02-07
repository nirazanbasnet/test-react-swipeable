/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"localhost",
			'hostname "images.pexels.com" is not configured under images in your `next.config.js`',
			"toolfix.vercel.app",
			"toolfixdev.webo.dev",
			"toolfixstaging.webo.dev",
		],
	},
};

export default nextConfig;
