---
title: WhatIsOhbug
editLink: true
---

<script setup>
import Basic from '../components/basic.vue'
</script>

# What is Ohbug

Ohbug 是一套开源前端监控框架。

通过在你的前端项目中集成 [SDK](https://github.com/ohbug-org/ohbug) 和配套使用 [Ohbug 控制台](https://github.com/ohbug-org/ohbug-dashboard)。一站式收集管理前端监控数据。

下面是一个最基本的示例：

```js
import Ohbug from '@ohbug/browser'

Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
```

<Basic />
