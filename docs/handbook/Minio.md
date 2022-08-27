# Minio

## 部署

### docker 部署

1、下载 `bitnami/minio` 的docker镜像：
```shell
docker pull bitnami/minio
```

2、运行容器：
```shell
docker run -d -p 9000:9000 -p 9001:9001 \
--name=minio --restart=always \
-e "MINIO_ROOT_USER=admin" \
-e "MINIO_ROOT_PASSWORD=admin123456" \
-v /home/docker/minio/data:/data \
-v /home/docker/minio/config:/root/.minio \
minio/minio server /data \
--console-address ":9000" --address ":9001"
```

### docker-compose 部署

1、下载 `bitnami/minio` 的docker镜像：
```shell
docker pull bitnami/minio
```

2、执行docker-compose-env.yml脚本
```shell
version: '3'
services:
  minio:
    image: minio/minio
    container_name: minio
    restart: always
    ports:
      - 9000:9000
      - 9001:9001
    volumes:
      - /home/docker/minio/config:/root/.minio
      - /home/docker/minio/data:/data
    environment:
      - MINIO_ROOT_USER=lzadmin
      - MINIO_ROOT_PASSWORD=lzadmin2022P@ssowrd
    command: server /data --console-address ":9000" --address ":9001"
```

## 问题

### 1、最新版本latest：

MINIO_ACCESS_KEY 替换为 MINIO_ROOT_USER,
MINIO_SECRET_KEY 替换为 MINIO_ROOT_PASSWORD

## 参考

