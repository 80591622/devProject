const path = require('path');
const { whenProd, getPlugin, pluginByName } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      let cdn = {
        js: []
      };
      whenProd(() => {
        // key: 不参与打包的包(由dependencies依赖项中的key决定)
        // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        };
        // 配置现成的cdn资源地址
        // 实际开发的时候 用公司自己花钱买的cdn服务器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js'
          ]
        };
      });
      // 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url
      const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));

      if (isFound) {
        // 找到了HtmlWebpackPlugin的插件
        match.userOptions.cdn = cdn;
      }

      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        crypto: false
      };

      // 解决Sass legacy JS API警告
      webpackConfig.module.rules.forEach((rule) => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf.forEach((oneOfRule) => {
            if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
              oneOfRule.use.forEach((loader) => {
                if (loader.loader && loader.loader.includes('sass-loader')) {
                  loader.options = {
                    ...loader.options,
                    sassOptions: {
                      ...loader.options?.sassOptions,
                      quietDeps: true // 抑制Sass警告
                    }
                  };
                }
              });
            }
          });
        }
      });

      // 解决Toast UI Editor source map警告
      webpackConfig.ignoreWarnings = [/Failed to parse source map from.*@toast-ui\/editor\/dist\/purify\.js\.map/];

      return webpackConfig;
    }
  }
};
