---
title: Metadata
editLink: true
---

# Metadata

`Metadata` 的存在使得 Ohbug 存在着无限的可能，你可以设置任何需求的数据，Ohbug 会把它们同 `Event` 一起上报。

与 `Action` 类似，`Metadata` 同样依据条件的不同分为 `Global Metadata` `Event Metadata`。

通过 `client.addMetadata` 添加的被认定为 `Global Metadata`。

通过 `event.Metadata` 添加的被认定为 `Event Metadata`。

通常 `Event Metadata` 将继承 `Global Metadata`，并可能做出拓展。

## Global Metadata

```typescript
interface OhbugClient {
  // ...
  addMetadata: (section: string, data: any) => any
  getMetadata: (section: string) => any
  deleteMetadata: (section: string) => any
}
```

```javascript
import Ohbug from '@ohbug/browser'

const client = Ohbug.setup({
  metadata: {
    dataType: {
      name: 'test_name',
    },
  },
})

// 新增 Global Metadata
client.addMetadata('dataType2', { name: 'test_name2' })
```

## Event Metadata

```typescript
interface OhbugEventWithMethods<D> extends OhbugEvent<D> {
  // ...
  addMetadata: (section: string, data: any) => any
  getMetadata: (section: string) => any
  deleteMetadata: (section: string) => any
}
```

```javascript
import Ohbug from '@ohbug/browser'

Ohbug.setup({
  metadata: {
    dataType: {
      name: 'test_name',
    },
  },
  onEvent: (event) => {
    if (condition) {
      // 新增 Event Metadata
      event.addMetadata('dataType2', { name: 'test_name2' })
    }
    return event
  },
})
```
