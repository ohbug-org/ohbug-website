---
title: Angular 集成指南
metaTitle: Angular 集成指南 - Ohbug Docs
metaDescription: ohbug-angular 是对 ohbug-browser 的扩展。
---

# Angular 集成指南

`@ohbug/angular` 是对 `@ohbug/browser` 的扩展，利用 `ErrorHandler` 捕获到 Angular 相关的异常信息。

## 安装

```shell
npm install @ohbug/browser @ohbug/angular --save
# or
yarn add @ohbug/browser @ohbug/angular
```

## 使用

`@ohbug/angular` 与大多数 Ohbug 扩展一样易用。

```typescript
// app.module.ts
import Ohbug from '@ohbug/browser'
import { ErrorHandler } from '@angular/core'

const client = Ohbug.init({ apiKey: 'YOUR_API_KEY' })
const OhbugProvider = client.use(OhbugAngular, ErrorHandler)

@NgModule({
  // others
  providers: [OhbugProvider],
})
export class AppModule {}
```



