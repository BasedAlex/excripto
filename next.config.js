/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['https://fakestoreapi.com/', 'localhost'],
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'fakestoreapi.com',
			port: '',
			pathname: '/img/',
		},
	],
}

module.exports = nextConfig

module.exports = {
	images: {
		domains: ['https://fakestoreapi.com/', 'localhost'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				port: '',
				pathname: 'img',
			},
		],
	},
}
