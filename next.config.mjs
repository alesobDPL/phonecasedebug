/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["utfs.io"], // Allow images from the "utfs.io" domain
    },
  
    async headers() {
      return [
        {
          source: "/api/:path*",  // Applies to all routes under /api/
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',  // Allow all origins (change to a specific domain in production)
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS', // Allow these methods
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization', // Allow these headers
            },
            {
              key: 'Access-Control-Allow-Credentials',
              value: 'true',  // Allow credentials (cookies, authorization headers)
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  