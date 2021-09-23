---
sidebar_position: 1
title: 安装
description: 安装使用 Ohbug SDK。
---

推荐使用 npm 方式安装接入 Ohbug。

## NPM

```shell
npm install @ohbug/browser --save
# or
yarn add @ohbug/browser
```

## Script

使用 Script 方式接入时需要注意将 Ohbug 脚本放在其他脚本之前，推荐放在 `head` 标签头部。

```html
<script src="https://cdn.jsdelivr.net/npm/@ohbug/browser@1.0.16/dist/ohbug-browser.umd.min.js"></script>
<script>
  var client = Ohbug.Client.init({
    apiKey: 'YOUR_API_KEY',
  })
</script>
```

> Ohbug 使用第三方 CDN 服务加速脚本，您可以在这获取到[最新版本](https://www.jsdelivr.com/package/npm/@ohbug/browser)
>
> 如果考虑服务的稳定，也可自行下载使用自己的 CDN 加速服务。
