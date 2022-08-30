---
title: Dashboard
editLink: true
---

# Dashboard

[Ohbug 控制台](https://github.com/ohbug-org/ohbug-dashboard) 建立在 [NestJS](https://nestjs.com/)、[NextJS](https://nextjs.org/)、[Prisma](https://www.prisma.io/) 和 [Postgresql](https://www.postgresql.org/) 之上，并提供了一套渐进式可扩展的使用模型，帮助你快速有效地收集异常数据。

## Get Demo

[Demo](http://app.ohbug.net/)
```
// 预览账号及密码
test@ohbug.net
12345678
```

## 通过 Docker 快速私有部署

1. 配置文件 [`ohbug.config.yml`](https://github.com/ohbug-org/ohbug-dashboard/blob/main/ohbug.config.yml)
   1. 注意 `http.url` 为线上域名 主要用于授权登录回调使用 需改为正确的线上服务地址
   2. `db.postgres.host` 和 `db.redis.host` 模板中值为 docker-compose 配置文件中设置的 `hostname` 如需使用自有数据库请修改对应配置

2. 配置 `docker-compose.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-dashboard/blob/main/docker-compose.yml)，默认包含部署所需要的所有服务，可自行修改。

3. 执行
```sh
docker-compose up --build -d
```

4. 启动后控制台前端端口默认为 `3000` 后端端口默认为 `6660`。

::: tip
Github 登录需要在 `ohbug.config.yml` 文件内配置 `oauth - github` 项，你可以 [查看 Github 创建 OAuth 应用程序](https://docs.github.com/developers/apps/building-oauth-apps/creating-an-oauth-app)。
:::
