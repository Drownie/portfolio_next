/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/id/**',
            }
        ]
    },
    // rewrites: async () => {
    //     return [
    //         {
    //             source: '/sitemap.xml',
    //             destination: '/api/sitemap'
    //         }
    //     ];
    // }
};

export default nextConfig;
