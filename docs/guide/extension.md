---
title: Extension
editLink: true
---

# Extension

扩展系统是 Ohbug 的核心系统之一，通过扩展你可以修改上报内容、自定义捕获数据等。

## 使用扩展

这里用 `@ohbug/extension-uuid` 举例，这个扩展可以帮你在每一条 `Event` 上设置 `UUID`。

```sh
yarn add @ohbug/extension-uuid
```

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionUUID from '@ohbug/extension-uuid'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionUUID)
```

更多内容见 [创建扩展](./extension.md#创建扩展)。

## 更多扩展

- [The one-stop shop for official Ohbug extensions](https://github.com/ohbug-org/extensions)

## 创建扩展

使用 `createExtension` 创建扩展。

```javascript
import { createExtension } from '@ohbug/core'

export const extension = createExtension({
  name: 'ExtensionName',
  init: () => {
    // 这里初始化数据收集的程序
  },
})
```

## 接口

```typescript
interface OhbugExtension<T = any> {
  name: string
  init?: (client: OhbugClient, ...args: any[]) => T
  created?: (
    event: OhbugEventWithMethods<any>,
    client: OhbugClient
  ) => OhbugEventWithMethods<any> | false
  notified?: (event: OhbugEventWithMethods<any>, client: OhbugClient) => void
}
```
