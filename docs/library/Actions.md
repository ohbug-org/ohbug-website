---
title: Actions
metaTitle: Actions - Ohbug Docs
metaDescription: 为了记录可能对 Event 产生有关的操作，我们将与 Event 相关的一些操作记录下来，称之为 Action。
---

# Actions

为了记录可能对 `Event` 产生有关的操作，我们将与 `Event` 相关的一些操作记录下来，称之为 `Action`。

默认情况下，每条 `Event` 会自动包含最近发生的30个 `Action`。

将包含以下类型：

***Browser***

-  click
- navigation
- console
- ajax
- fetch

## addAction

```typescript
interface OhbugClient {
  // ...
  addAction: (message: string, data: Record<string, any>, type: string, timestamp?: string) => void
}

interface OhbugEventWithMethods<D> extends OhbugEvent<D> {
  // ...
  addAction: (message: string, data: Record<string, any>, type: string, timestamp?: string) => void
}
```

根据条件不同 `Action` 被细分为两种：`Global Action` `Event Action`。

通过 `client.addAction` 添加的被认定为 `Global Action`。

通过 `event.addAction` 添加的被认定为 `Event Action`。

通常 `Event Action` 将继承 `Global Action`，并可能做出拓展。

假设我们需要将某个注册按钮的点击作为 `Action` 记录。

```javascript
// html
<button id=login>登录</button>

// js
import Ohbug from '@ohbug/browser'
const client = Ohbug.init({ YOUR_API_KEY })

const login = document.querySelector('#login')
login.addEventListener('click', e => {
  client.addAction('用户点击了登录按钮', e, 'click')
})
```

加入如上代码后，所有 `Event` 将带有这一条 `Action`。
