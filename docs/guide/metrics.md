---
title: Metrics
editLink: true
---

# Metrics

通过集成 [@ohbug/extension-web-vitals](https://github.com/ohbug-org/extensions/tree/main/packages/extension-web-vitals) Ohbug 支持展示项目的核心 Web 指标。

## Installation

```sh
pnpm i web-vitals @ohbug/extension-web-vitals
```

```js
import Ohbug from '@ohbug/browser'
import OhbugExtensionWebVitals from '@ohbug/extension-web-vitals'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionWebVitals)
```
