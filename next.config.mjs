/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"dylanawsbucket.s3.amazonaws.com"
            }
        ]
    }
};

export default nextConfig;
