---
title: MetaData
---

# MetaData

`MetaData` 的存在使得 Ohbug 存在着无限的可能，你可以设置任何需求的数据，Ohbug 会把它们同 `Event` 一起上报。

与 `Action` 类似，`MetaData` 同样依据条件的不同分为 `Global MetaData` `Event MetaData`。

通过 `client.addMetaData` 添加的被认定为 `Global MetaData`。

通过 `event.MetaData` 添加的被认定为 `Event MetaData`。

通常 `Event MetaData` 将继承 `Global MetaData`，并可能做出拓展。

### Global MetaData

```typescript
interface OhbugClient {
  // ...
  addMetaData: (section: string, data: any) => any
  getMetaData: (section: string) => any
  deleteMetaData: (section: string) => any
}
```

```javascript
import Ohbug from '@ohbug/browser'

const client = Ohbug.init({
  metadata: {
    dataType: {
      name: 'test_name'
    }
  }
})

// 新增 Global MetaData
client.addMetaData('dataType2', { name: 'test_name2' })
```

### Event MetaData

```typescript
interface OhbugEventWithMethods<D> extends OhbugEvent<D> {
  // ...
  addMetaData: (section: string, data: any) => any
  getMetaData: (section: string) => any
  deleteMetaData: (section: string) => any
}
```

```javascript
import Ohbug from '@ohbug/browser'

Ohbug.init({
  metadata: {
    dataType: {
      name: 'test_name'
    }
  },
  created: (event) => {
    if (condition) {
      // 新增 Event MetaData
      event.addMetaData('dataType2', { name: 'test_name2' })
    }
    return event
  }
})
```

