/** @type {import('next').NextConfig} */

const conditionalConfig = {
  ...(process.env.BASE_PATH && {
    basePath: `/${process.env.BASE_PATH}`,
    assetPrefix: `/${process.env.BASE_PATH}`,
  }),
};

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: false,
  ...conditionalConfig,
  env: {
    ...conditionalConfig,
    siteUrl: process.env.SITE_URL,
    // gtmId: process.env.GTM_ID,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
