/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['picsum.photos'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/id/**',
            }
        ]
    }
};

export default nextConfig;
