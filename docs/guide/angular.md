---
title: Angular
editLink: true
---

# Angular

`@ohbug/angular` 是对 `@ohbug/browser` 的扩展，利用 `ErrorHandler` 捕获到 Angular 相关的异常信息。

## 安装

```shell
pnpm instal @ohbug/browser @ohbug/angular
```

## 使用

`@ohbug/angular` 与大多数 Ohbug 扩展一样易用。

```typescript
// app.module.ts
import Ohbug from '@ohbug/browser'
import { ErrorHandler } from '@angular/core'
import OhbugAngular from '@ohbug/angular'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

@NgModule({
  // others
  providers: [OhbugAngular(client, ErrorHandler)],
})
export class AppModule {}
```
