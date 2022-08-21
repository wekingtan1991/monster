<!-- ---
title: Minio笔记
date: '2022-06-09'
sidebar: 'auto'
--- -->
# Minio

## docker 部署 Minio

```bash
docker run -d -p 9000:9000 -p 9001:9001 --name=minio --restart=always -e "MINIO_ROOT_USER=admin" -e "MINIO_ROOT_PASSWORD=admin123456" -v /home/docker/minio/data:/data -v /home/docker/minio/config:/root/.minio  minio/minio server /data --console-address ":9000" --address ":9001"
```

## 问题

### 1、最新版本latest：

MINIO_ACCESS_KEY 替换为 MINIO_ROOT_USER,
MINIO_SECRET_KEY 替换为 MINIO_ROOT_PASSWORD

## 参考

