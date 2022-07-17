---
title: Deploy
editLink: true
---

# Deploy

## Docker 搭建

1. 配置文件 [`ohbug.config.yml`](https://github.com/ohbug-org/ohbug-dashboard/blob/main/ohbug.config.yml)
2. 配置 `docker-compose.prod.yml`，推荐使用 [docker-compose 模板](https://github.com/ohbug-org/ohbug-dashboard/blob/main/docker-compose.prod.yml)，默认包含部署所需要的所有服务，可自行修改。
3. 执行 `docker-compose -f ./docker-compose.prod.yml up --build -d`
