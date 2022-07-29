---
title: Event
editLink: true
---

# Event

我们将每一条将要上报的数据称为 `Event` (事件)，大部分情况下 Ohbug 将为你管理 `Event` 的创建、修改以及特殊数据的设置。

当然有时候需要设置一些自定义数据亦或是自己创建一个 `Event`，本篇文档将重点介绍 `Event` 的创建。

## 创建 Event

```typescript
type OhbugCategory =
  | 'error'
  | 'message'
  | 'feedback'
  | 'view'
  | 'performance'
  | 'other'
interface OhbugCreateEvent<D> {
  category?: OhbugCategory
  type: string
  detail: D
}

interface OhbugClient {
  // ...
  createEvent: <D = any>(
    value: OhbugCreateEvent<D>
  ) => OhbugEventWithMethods<D> | null
}
```

```javascript
import Ohbug from '@ohbug/browser'

// 调用 `Ohbug.setup` 得到 client 实例
const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

// 得到 `Event`
const event = client.createEvent({
  category: 'error',
  type: 'unknown',
  detail: 'xxx',
})
```

来看下 `createEvent` 需要传入的参数：

- `category`: 标识 `Event` 所属的大类
- `type`: 标识 `Event` 所属的类型，相较于 `category`，`type` 属于二级分类
- `detail`: `Event` 的具体数据

## 上报 Event

上报 `Event` 只需直接调用 `client.notify(event)`

```typescript
interface OhbugClient {
  // ...
  notify: <D = any>(
    eventLike: any,
    beforeNotify?: (
      event: OhbugEventWithMethods<D> | null
    ) => OhbugEventWithMethods<D> | null
  ) => Promise<any | null>
}
```

通常推荐使用 `createEvent` 创建 `Event` 后上报，对于未使用 `createEvent` 的数据将尝试使用 `createEvent` 进行包裹。

## The Event Object

```typescript
interface OhbugEvent<D> {
  apiKey: string
  appVersion?: string
  appType?: string
  releaseStage?: OhbugReleaseStage
  timestamp: string
  category?: OhbugCategory
  type: string
  sdk: OhbugSDK

  detail: D
  device: OhbugDevice
  user?: OhbugUser
  actions?: OhbugAction[]
  metadata?: OhbugMetadata
}
```

### apiKey

用于发送到 Ohbug 的 API key。

### appVersion

应用版本。

### appType

应用类型。

### releaseStage

当前应用的环境。

### timestamp

`Event` 发生时的时间戳。

### category

`Event` 所属的大类。

```typescript
type OhbugCategory =
  | 'error'
  | 'message'
  | 'feedback'
  | 'view'
  | 'performance'
  | 'other'
```

### type

`Event` 所属的小类 (细分类型)。

```typescript
const enum EventTypes {
  // error
  UNCAUGHT_ERROR = 'uncaughtError', // 意料之外的错误
  RESOURCE_ERROR = 'resourceError', // 资源加载错误
  UNHANDLEDREJECTION_ERROR = 'unhandledrejectionError', // unhandledrejection 错误，可能包含 Promise, react render 等错误
  AJAX_ERROR = 'ajaxError', // ajax 错误
  FETCH_ERROR = 'fetchError', // fetch 错误
  WEBSOCKET_ERROR = 'websocketError', // websocket 错误
  UNKNOWN_ERROR = 'unknownError', // 未知错误
  // message
  MESSAGE = 'message', // 主动上报的信息
  // feedback
  FEEDBACK = 'feedback', // 反馈
  // view
  VIEW = 'view', // 用于计算 PV/UV
  // react
  REACT = 'react',
  // vue
  VUE = 'vue',
  // angular
  ANGULAR = 'angular',
  // miniapp
  MINIAPP_ERROR = 'miniappError',
  MINIAPP_UNHANDLEDREJECTION_ERROR = 'miniappUnhandledrejectionError',
  MINIAPP_PAGENOTFOUND_ERROR = 'miniappPagenotfoundError',
  MINIAPP_MEMORYWARNING_ERROR = 'miniappMemorywarningError',
}
```

### sdk

Ohbug sdk 相关版本、平台信息
### detail

`Event` 的具体数据。

### device

当前设备的信息。

```typescript
interface OhbugDevice {
  // browser
  language?: string
  userAgent?: string
  title?: string
  url?: string

  [key: string]: any
}
```

### user

当前 [用户](./user.md) 的信息。

### actions

当前 `Event` 所有的 [`Action`](./action.md)。

### metaData

当前 `Event` 的 [`Metadata`](./metadata.md)。

## Event 所能使用的方法

```typescript
interface OhbugEventWithMethods<D> extends OhbugEvent<D> {
  addAction: (
    message: string,
    data: Record<string, any>,
    type: string,
    timestamp?: string
  ) => void
  getUser: () => OhbugUser | undefined
  setUser: (user: OhbugUser) => OhbugUser | undefined
  addMetadata: (section: string, data: any) => any
  getMetadata: (section: string) => any
  deleteMetadata: (section: string) => any
}
```

对于这些方法的详细介绍，可参考

- [addAction](./action.md#addaction)
- [更改用户数据](./user.md#更改用户数据)
- [Metadata](./metadata.md)
