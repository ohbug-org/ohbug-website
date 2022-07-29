---
title: GettingStarted
editLink: true
---

# Getting Started

`@ohbug/browser` 是面向浏览器环境的基础SDK包，提供了 代码异常捕获、异步异常捕获、网络请求异常捕获 以及点击、路由、设备信息等数据的收集功能。并且你只需要两行代码就可以接入这些功能。

## 安装

```sh
pnpm i @ohbug/browser
```

不同前端框架的异常信息不同，Ohbug 对不同前端框架推出了适配包用于捕获框架层面的异常数据。如果您需要，请点击查看对应的定制指南。

[React](./react.md) |
[Vue](./vue.md) |
[Angular](./angular.md)


## 使用

```js
import Ohbug from '@ohbug/browser'

Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
```

`apiKey` 是你项目的标识，他在你[部署控制台](./dashboard.md)后在项目设置中获得。

## 自动捕获未处理异常

通常在完成安装和基本配置后，Ohbug 将自动报告未处理的异常和未处理的 `Promise rejections`。

## 上报自定义异常

有时需要上报一些自定义的错误信息或已处理的错误，为此可调用 `client.notify()`。

```javascript
import Ohbug from '@ohbug/browser'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

try {
  doSomething()
} catch (e) {
  client.notify(e)
}
```

## 自动捕获用于场景还原的数据

Ohbug 会自动为每个异常捕获以下数据。

- 当前网站信息 `url` `referrer` `title` 等
- 浏览器名称、版本、地域等
- 操作系统
- releaseStage (生产环境、开发环境、测试环境等)

## 将异常与用户联系起来

为了将错误与异常报告联系起来，让你在 Ohbug 控制台中看到每个异常对应的用户。

你可以在 Ohbug SDK 启动时使用 [user](../api/api.md#user) 配置属性或通过 onEvent 回调来设置异常报告的用户信息。

更多信息见 [User](./user.md)

## 通过 Actions 还原异常发生步骤

为了了解你的应用程序在每次发生异常前发生了什么，Ohbug 会自动收集一些事件 称之为 `Actions`。每条异常数据都有着可配置数量的 `Actions` 以帮助诊断哪些事件导致了异常。

默认情况下，Ohbug 会捕捉以下事件作为 `Actions`：

- 点击事件
- Console logs, warnings, 和 errors
- History push state 和 replace state
- Hash change
- HTTP 请求

当然你也可以自己 [增加 Action](./action.md#addaction)

## 通过 Metadata 收集自定义数据

如果你需要根据你的需求或喜好收集一些定制化的数据，用于场景环境，数据分析，可以设置 Metadata, Ohbug 会把它们同 `Event` 一起上报。

更多信息见 [Metadata](./metadata.md)
