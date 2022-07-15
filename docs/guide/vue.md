---
title: Vue
editLink: true
---

# Vue

`@ohbug/vue` 是对 `@ohbug/browser` 的扩展，利用 `Vue.config.errorHandler` 捕获到 Vue 相关的异常信息。

## 安装

```shell
pnpm instal @ohbug/browser @ohbug/vue
```

## 使用

`@ohbug/vue` 与大多数 Ohbug 扩展一样易用。

```javascript
import Vue from 'vue'
import Ohbug from '@ohbug/browser'
import OhbugVue from '@ohbug/vue'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

Vue.createApp(App)
  .use(OhbugVue(client))
  .mount('#app')
```
