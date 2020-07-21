---
title: React 集成指南
metaTitle: React 集成指南 - Ohbug Docs
metaDescription: ohbug-react 是对 ohbug-browser 的扩展，利用 componentDidCatch 捕获到 React 相关的异常信息。
---

# React 集成指南

`@ohbug/react` 是对 `@ohbug/browser` 的扩展，利用 `componentDidCatch` 捕获到 React 相关的异常信息。

## 安装

```shell
npm install @ohbug/browser @ohbug/react --save
# or
yarn add @ohbug/browser @ohbug/react
```

## 使用

`@ohbug/react` 与大多数 Ohbug 扩展一样易用。

```jsx
import React from 'react'
import Ohbug from '@ohbug/browser'
import OhbugReact from '@ohbug/react'

const client = Ohbug.init({ apiKey: 'YOUR_API_KEY' })
const OhbugErrorBoundary = client.use(OhbugReact, React)

function App() {
  return (
    <div className="App">
      <OhbugErrorBoundary>
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

默认情况下，*error boundary* 将尝试重新渲染 *child tree*，可能导致白屏。

如果指定 `<FallbackComponent />`，则发生错误时 Ohbug 会呈现此错误，以显示友好的错误页面，提升用户体验。

