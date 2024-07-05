// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '' : '',
  images: {
    loader: 'imgix',
    path: '',
    unoptimized: true
  },
  trailingSlash: true,
};
