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
      }

      // 找到 CSS 相关的规则
      const cssRules = webpackConfig.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
      ).oneOf
      cssRules.forEach((rule) => {
        if (rule.use) {
          // 移除 MiniCssExtractPlugin.loader
          const miniCssIndex = rule.use.findIndex(
            (use) =>
              typeof use === 'string' && use.includes('mini-css-extract-plugin')
          )
          if (miniCssIndex !== -1) {
            rule.use.splice(miniCssIndex, 1)
            console.log('Removed MiniCssExtractPlugin.loader')
          }
        }
      })

      // 移除 CSS 压缩插件
      webpackConfig.optimization.minimizer =
        webpackConfig.optimization.minimizer.filter((minimizer) => {
          const isCssMinimizer =
            minimizer.constructor.name === 'CssMinimizerPlugin'
          if (isCssMinimizer) {
            console.log('Removed CssMinimizerPlugin')
          }
          return !isCssMinimizer
        })

      return webpackConfig
    }
  }
}
