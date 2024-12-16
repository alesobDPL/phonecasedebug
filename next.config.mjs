/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["utfs.io"], // Allow images from the "utfs.io" domain
    },
  
    async headers() {
      return [
        {
          // Apply these headers to all API routes (using /api/**/* to match dynamic API routes)
          "source": "/api/(.*)",  // This applies to all API routes
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',  // Allow all origins; change to a specific domain in production
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS', // Allow these methods
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization', // Allow these headers
            },
          ],
        },
      ];
    },
  };
  
  // Export the configuration as the default export
  export default nextConfig;
  