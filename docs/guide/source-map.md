---
title: SourceMap
editLink: true
---

# SourceMap

Ohbug 支持使用 SourceMap 来反向 JavaScript 代码转换。

## 生成 source maps 文件

多数现代打包都支持生成 source maps 文件：

- [Webpack](https://webpack.js.org/configuration/devtool/#devtool) (set `devtool` option)
- [Rollup](https://rollupjs.org/guide/en) (use the `--sourcemap` flag)
- [Babel](https://babeljs.io/docs/en/options#source-map-options) (use the `sourceMaps` option)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html) (use `sourceMap` option)
- [Browserify](https://github.com/browserify/browserify) (use the `--debug` flag)
- [Uglify](https://github.com/mishoo/UglifyJS2#source-map-options) (use `--source-map` option)

## 上传 source maps 文件

有以下几种方式上传 source maps 到 Ohbug：

- [ohbug-cli](https://github.com/ohbug-org/ohbug-cli)
- [@ohbug/unplugin](https://github.com/ohbug-org/unplugin-ohbug)

您可以在您的仪表盘: `项目设置(Project Settings) -> SourceMap` 查看或删除 source maps 文件
