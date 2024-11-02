/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
