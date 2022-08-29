---
title: User
editLink: true
---

# User

有时我们希望为每位用户建立精准的用户画像用以区分，`user` 这个设定或许可以在一定程度上帮助你实现。

```typescript
interface OhbugUser {
  uuid?: string
  ipAddress?: string
  id?: number | string
  name?: string
  email?: string
  metadata?: any
}
```

额外的 User 信息请写入 `metadata`

## 更改用户数据

通常有三种方式去更改用户数据：

## Ohbug 启动时配置

```javascript
Ohbug.setup({
  user: {
    id: '1',
    name: 'Ohbug',
    email: 'test@ohbug.net',
  },
})
```

## Ohbug 启动后设置

```javascript
const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })

client.setUser({
  id: '1',
  name: 'Ohbug',
  email: 'test@ohbug.net',
})
```

## created 时设置

```javascript
Ohbug.setup({
  onEvent: (event) => {
    event.setUser({
      id: '1',
      name: 'Ohbug',
      email: 'test@ohbug.net',
    })
    return event
  },
})
```
