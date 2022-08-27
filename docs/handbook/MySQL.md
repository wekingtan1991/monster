# MySQL

## 部署

### docker 部署

1、下载 `mysql:8.0.28-oracle` 的docker镜像：
```shell
docker pull mysql:8.0.28-oracle
```

2、上传 `cnf` 文件到 `/home/docker/mysql/conf/`：
```shell
mkdir -p /home/docker/mysql/conf
cp mysql8.cnf /home/docker/mysql/conf/
```

3、运行容器：
```shell
docker run -p 3306:3306 --name mysql8 \
-v /home/docker/mysql/log:/logs \
-v /home/docker/mysql/data:/var/lib/mysql \
-v /home/docker/mysql/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=root  \
-d mysql:8.0.28-oracle
```

### docker-compose 部署

1、下载 `mysql:8.0.28-oracle` 的docker镜像：
```shell
docker pull mysql:8.0.28-oracle
```

2、上传 `cnf` 文件到 `/home/docker/mysql/conf/`：
```shell
mkdir -p /home/docker/mysql/conf
cp mysql8.cnf /home/docker/mysql/conf/
```

3、执行docker-compose-env.yml脚本
```shell
version: '3'
services:
  mysql:
    # 指定服务使用的镜像
    image: mysql:8.0.28-oracle
    # 指定容器名称
    container_name: mysql8
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
    restart: always
    # 指定服务运行的端口
    ports:
      - 3306:3306
    # 指定容器中需要挂载的文件
    volumes:
      - /home/docker/mysql/log:/logs
      - /home/docker/mysql/data:/var/lib/mysql
      - /home/docker/mysql/conf:/etc/mysql/conf.d
    # 指定容器的环境变量
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_ROOT_HOST='%'       # 访问权限
```

### 配置文件

#### 查找配置文件位置

1、进入容器内部：
```shell
docker exec -it mysql8 /bin/bash
```

2、查找配置文件位置：
```shell
find / -name "*.cnf"
```

3、根据查找结果：

/etc/my.cnf

#### 配置文件例子

1、`mysql8.cnf` 自定义配置文件
```config
[mysqld]
sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION
```

2、[mysql8配置文件默认例子](./assets/my.cnf)

3、通过 `my.cnf` 可以知道，mysql 还包括 `/etc/mysql/conf.d/` 这个地方的配置文件。所以 `mysql8.cnf` 可以放到该位置