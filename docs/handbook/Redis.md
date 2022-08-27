# Redis

## 部署

### docker 部署

1、下载 `redis:5.0.10` 的docker镜像：
```shell
docker pull redis:5.0.10
```

2、上传 `conf` 文件到 `/home/docker/redis/conf/`：
```shell
mkdir -p /home/docker/redis/conf
cp redis5.conf /home/docker/redis/conf/
```

3、运行容器：
```shell
docker run -p 6379:6379 --name redis5 \
-v /home/docker/redis/data:/data \
-v /home/docker/redis/conf:/etc/redis/redis.conf \
-d redis:5.0.10 redis-server --appendonly yes
```

4、进入Redis容器使用redis-cli命令进行连接：
```shell
docker exec -it redis5 redis-cli
```

### docker-compose 部署

1、下载 `redis:5.0.10` 的docker镜像：
```shell
docker pull redis:5.0.10
```

2、上传 `conf` 文件到 `/home/docker/redis/conf/`：
```shell
mkdir -p /home/docker/redis/conf
cp redis5.conf /home/docker/redis/conf/
```

3、执行docker-compose-env.yml脚本
```shell
version: '3'
services:
  redis:
    image: redis:5.0.10
    container_name: redis5
    command: redis-server /etc/redis/redis.conf/redis5.conf --appendonly yes
    restart: always
    volumes:
      - /home/docker/redis/data:/data #数据文件挂载
      - /home/docker/redis/conf:/etc/redis/redis.conf #配置文件挂载
    ports:
      - 6379:6379
```

### 配置文件

#### 查找配置文件位置

1、进入容器内部：
```shell
docker exec -it redis5 /bin/bash
```

2、查找配置文件位置：
```shell
find / -name "*.conf"
```

3、根据查找结果：

/etc/redis/redis.conf
/etc/redis/redis.conf/redis5.conf


#### 配置文件例子

1、[redis5配置文件默认例子](./assets/redis5.conf)

