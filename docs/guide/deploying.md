---
title: Deploy
editLink: true
---

# Deploy

## Docker 搭建

1. 配置文件 [`ohbug.config.yml`](https://github.com/ohbug-org/ohbug-dashboard/blob/main/ohbug.config.yml)
   1. 注意 `http.url` 为线上域名 主要用于授权登录回调使用 需改为正确的线上服务地址
   2. `db.postgres.host` 和 `db.redis.host` 模板中值为 docker-compose 配置文件中设置的 `hostname` 如需使用自有数据库请修改对应配置
2. 配置 `docker-compose.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-dashboard/blob/main/docker-compose.yml)，默认包含部署所需要的所有服务，可自行修改。
3. 执行 `docker-compose up --build -d`
