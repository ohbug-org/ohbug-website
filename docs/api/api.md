---
title: APIReference
editLink: true
---

# API Reference

## apiKey

必填项。

用于发送到 Ohbug 的 API key。每个 `apiKey` 对应一个 Ohbug 项目。

```javascript
Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
```

## appVersion

选填项。

应用版本。建议提供应用的版本号/标识符，这对找出引入时间和修复错误十分有帮助。

```javascript
Ohbug.setup({ appVersion: '8.88.8' })
```

## appType

选填项。

应用类型。如果您多个应用向同一个 Ohbug 项目报告，则可能需要一个标识来区分不同的项目。

```javascript
Ohbug.setup({ appType: 'client' })
```

## releaseStage

选填项。默认值：`production`

如果你想区分应用的不同环境（development，production 等），可以设置 `releaseStage`。

```javascript
Ohbug.setup({ releaseStage: 'production' })
```

当然如果你使用了 _webpack_、_rollup_ 等打包工具，可以直接使用环境变量 `NODE_ENV`。

```javascript
Ohbug.setup({ releaseState: process.env.NODE_ENV })
```

## endpoint

选填项。默认值：`http://localhost:6660`

默认情况下 Ohbug 将所有的 `Event` 上报至 `http://localhost:6660`，当然这个 url 可以通过 `endpoint` 修改。

```javascript
Ohbug.setup({ endpoint: 'http://localhost:6660' })
```

## maxActions

选填项。默认值：`30`

将要存储的最大 `Action` 数。一旦达到最大阈值，最老的 `Action` 将被删除。

```javascript
Ohbug.setup({ maxActions: 30 })
```

> 为了防止 `Action` 数过大导致 `Event` 数据量太过庞大，`maxActions` 设置了最大值 `100`

> 有关更多 `Action` 相关的文档，可见 [Actions](../guide/action.md)

## created (hooks)

选填项。默认值：`event => event`

如果你需要在上报前对 `Event` 进行修改亦或是阻止上报，`created` 提供了做到这些事情的能力。

```javascript
Ohbug.setup({
  created: (event, client) => {
    // do something
    return event
  },
})
```

如果需要阻止上报，在 `created` 内返回 `false` 即可。

```javascript
Ohbug.setup({
  created: (event, client) => {
    // do something

    if (condition) {
      // 将阻止上报
      return false
    }
    return event
  },
})
```

> 请谨慎使用 `created` 回调，在 Ohbug 的扩展系统设计中，当前扩展 `created` 所返回的内容将传递给下一个插件。

## notified (hooks)

选填项。默认值：`() => {}`

满足你上报后做一些事情的需求。

```javascript
Ohbug.setup({
  notified: (event, client) => {
    // do something
  },
})
```

## logger

选填项。默认值：

```javascript
const prefix = 'Ohbug'

export const logger = {
  log(...args: any[]) {
    console.log(prefix, ...args)
  },

  info(...args: any[]) {
    console.info(prefix, ...args)
  },

  warn(...args: any[]) {
    console.warn(prefix, ...args)
  },

  error(...args: any[]) {
    console.error(prefix, ...args)
  },
}
```

默认情况下 Ohbug 产生的日志消息带有 `Ohbug` 前缀。您可以自定义自己的 _logger_，或者设置 `logger: null` 来关闭日志输出。

如果提供 _logger_，则它必须具有以下方法：`log`, `info`, `warn`, `error`。

```javascript
// 关闭日志输出
Ohbug.setup({ logger: null })

// 使用自定义 logger
const myLogger = {
  log: function () {},
  info: function () {},
  warn: function () {},
  error: function () {},
}
Ohbug.setup({ logger: myLogger })
```

## user

选填项。

`user` 选项用于区分不同的用户。它接受如下的数据格式，另外限制最多有 `6` 项属性。

```javascript
Ohbug.setup({
  user: {
    id: '1',
    name: 'Ohbug',
    email: 'test@ohbug.net',
  },
})
```

> 有关更多修改 `user` 相关的内容，可参考 [更改用户数据](../guide/user.md#更改用户数据)

## metaData

选填项。

如果你有任何希望与 `Event` 一起上报的数据，使用 `metaData`。

```javascript
Ohbug.setup({
  metadata: {
    dataType: {
      name: 'test_name',
    },
  },
})
```

> 有关更多修改 `metaData` 相关的内容，可参考 [MetaData](../guide/meta-data.md)
