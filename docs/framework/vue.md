---
sidebar_position: 2
title: Vue 集成指南
description: ohbug-vue 是对 ohbug-browser 的扩展，利用 `Vue.config.errorHandler` 捕获到 Vue 相关的异常信息。
---

`@ohbug/vue` 是对 `@ohbug/browser` 的扩展，利用 `Vue.config.errorHandler` 捕获到 Vue 相关的异常信息。

## 安装

```shell
npm install @ohbug/browser @ohbug/vue --save
# or
yarn add @ohbug/browser @ohbug/vue
```

## 使用

`@ohbug/vue` 与大多数 Ohbug 扩展一样易用。

```javascript
import Vue from 'vue'
import Ohbug from '@ohbug/browser'
import OhbugVue from '@ohbug/vue'

const client = Ohbug.init({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugVue, Vue)
```
