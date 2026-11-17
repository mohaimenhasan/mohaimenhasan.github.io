const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Actions supplies the repository name; local development uses the root URL.
  basePath: repository && repository !== 'mohaimenhasan.github.io' ? `/${repository}` : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;