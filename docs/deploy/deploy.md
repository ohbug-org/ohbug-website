---
sidebar_position: 1
title: Ohbug 部署
description: Ohbug 部署
---

## Docker 搭建

1. 配置环境变量文件 [`.env.production`](https://github.com/ohbug-org/ohbug-server/blob/main/.env.production)
2. 配置 `docker-compose.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-server/blob/main/docker-compose.prod.yml)，默认包含部署所需要的所有服务，可自行修改。
3. 执行 `docker-compose --env-file .env.production -f ./docker-compose.prod.yml up --build -d`
