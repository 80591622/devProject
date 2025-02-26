const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
         ...(webpackConfig.resolve.fallback || {}),
          crypto: false
      };
      return webpackConfig;
  }
  }
}
