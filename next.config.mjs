/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirect to /chat/1
  async redirects() {
    return [
      {
        source: "/",
        destination: "/chat/1",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|mp4|ttf|otf|woff|woff2)",

        headers: [
          {
            key: "cache-control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["robohash.org"],
  },
};

//

export default nextConfig;
