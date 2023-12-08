/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	env: {
		WEB3_ACCESS_KEY: process.env.WEB3_ACCESS_KEY,
	},
};

module.exports = nextConfig;
