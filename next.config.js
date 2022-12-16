/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['https://fakestoreapi.com/', 'localhost'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
}

module.exports = nextConfig
