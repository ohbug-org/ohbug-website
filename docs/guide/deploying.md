---
title: Deploy
editLink: true
---

# Deploy

## Docker 搭建

1. 配置环境变量文件 [`.env.production`](https://github.com/ohbug-org/ohbug-dashboard/blob/main/.env.example)
2. 配置 `docker-compose.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-dashboard/blob/main/docker-compose.yml)，默认包含部署所需要的所有服务，可自行修改。
3. 执行 `docker-compose --env-file .env -f ./docker-compose.yml up --build -d`
