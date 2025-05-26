import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			new URL('https://storage.googleapis.com/xesque-dev/challenge-images/**')
		]
	}
};

export default nextConfig;
