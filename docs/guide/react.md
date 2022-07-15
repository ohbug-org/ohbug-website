---
title: React
editLink: true
---

# React

`@ohbug/react` 是对 `@ohbug/browser` 的扩展，利用 `componentDidCatch` 捕获到 React 相关的异常信息。

## 安装

```shell
pnpm instal @ohbug/browser @ohbug/react
```

## 使用

`@ohbug/react` 与大多数 Ohbug 扩展一样易用。

```jsx
import React from 'react'
import Ohbug from '@ohbug/browser'
import { OhbugErrorBoundary } from '@ohbug/react'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

function App() {
  return (
    <div className="App">
      <OhbugErrorBoundary client={client}>
        <HelloWorld />
      </OhbugErrorBoundary>
    </div>
  )
}
```

## OhbugErrorBoundary Props

```typescript
interface ErrorBoundaryProp {
  FallbackComponent: React.ReactElement
}
```

### FallbackComponent

默认情况下，_error boundary_ 将尝试重新渲染 _child tree_，可能导致白屏。

如果指定 `FallbackComponent`，则发生错误时 Ohbug 会呈现此错误，以显示友好的错误页面，提升用户体验。
