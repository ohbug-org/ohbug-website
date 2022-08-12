---
title: Metrics
editLink: true
---

# Feedbacks

通过集成 [@ohbug/extension-feedback](https://github.com/ohbug-org/extensions/tree/main/packages/extension-feedback) Ohbug 支持收集用户反馈信息。

## Installation

```sh
pnpm i @ohbug/extension-feedback
```

```js
import Ohbug from '@ohbug/browser'
import OhbugExtensionFeedback from '@ohbug/extension-feedback'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionFeedback)
```
