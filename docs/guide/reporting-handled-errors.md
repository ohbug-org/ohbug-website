---
title: ReportingHandledErrors
editLink: true
---

# Reporting Handled Errors

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
