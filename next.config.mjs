/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
//   basePath: '/googleSearch-clone',
    images:{
        // unoptimized: true,
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'cdn.logojoy.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
