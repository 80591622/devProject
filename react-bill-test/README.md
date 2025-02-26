If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'
	- install 'crypto-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "crypto": false } 

1. Webpack 5 不再默认包含 Node.js 核心模块的 polyfill
在 Webpack 5 之前，Webpack 会默认包含一些 Node.js 核心模块（如 crypto、fs、path 等）的 polyfill，以让在 Node.js 环境中运行的代码能在浏览器环境里正常工作。不过从 Webpack 5 开始，这个默认行为被移除了，所以当代码里引用了 Node.js 核心模块，就需要手动配置 polyfill。
2. axios 库依赖 crypto 模块
axios 库在某些情况下可能会依赖 crypto 模块来完成一些加密或者哈希计算等操作。当 Webpack 打包时，遇到 axios 中对 crypto 模块的引用，却找不到对应的模块，就会抛出这个错误。


保存index.scss文件保存会自动生成index.css 和 index.min.css

https://blog.csdn.net/xiaochengstudent/article/details/128713240

设置为空
"easysass.formats": [
    {
      "format": "expanded",
      "extension": ""
    },
    {
      "format": "compressed",
      "extension": ""
    }
  ]