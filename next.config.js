/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
    fetchCacheKeyPrefix: 'no-store',
  },
};

module.exports = nextConfig;
