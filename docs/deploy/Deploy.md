---
title: Ohbug 部署
metaTitle: Ohbug 部署 - Ohbug Docs
metaDescription: Ohbug 部署
---

# Ohbug 部署

## Docker 一步到位搭建（推荐）

1. 配置环境变量文件 `.env.production`
2. 配置 `docker-compose.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-server/blob/master/docker-compose.prod.yml)，默认包含部署所需要的所有服务，可自行修改。
3. 执行 `docker-compose --env-file .env.production -f ./docker-compose.prod.yml up --build -d`
