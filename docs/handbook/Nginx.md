# Nginx

## 部署

### docker 部署

1、下载 `Nginx1.22` 的docker镜像：
```shell
docker pull nginx:1.22
```

2、先运行一次容器（为了拷贝配置文件）：
```shell
docker run -p 80:80 --name nginx \
-v /home/docker/nginx/html:/usr/share/nginx/html \
-v /home/docker/nginx/logs:/var/log/nginx  \
-v /home/docker/nginx/conf:/etc/nginx \
-d nginx:1.22
```

3、将容器内的配置文件拷贝到指定目录：
```shell
docker container cp nginx:/etc/nginx /home/docker/nginx/
```

4、修改文件名称
```shell
mv nginx conf
```

5、停止并删除容器
```shell
docker stop nginx
docker rm nginx
```

6、再次执行命令启动docker容器
```shell
docker run -p 80:80 --name nginx \
-v /home/docker/nginx/html:/usr/share/nginx/html \
-v /home/docker/nginx/logs:/var/log/nginx  \
-v /home/docker/nginx/conf:/etc/nginx \
-d nginx:1.22
```

### docker-compose 部署

1、下载 `Nginx1.22` 的docker镜像：
```shell
docker pull nginx:1.22
```

2、上传 `conf` 文件到 `/home/docker/nginx/conf/`：
```shell
mkdir -p /home/docker/nginx/conf
cp nginx.conf /home/docker/nginx/conf/
```

3、执行docker-compose-env.yml脚本
```shell
version: '3'
services:
  nginx:
    image: nginx:1.22
    container_name: nginx
    restart: always
    volumes:
      - /home/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf #配置文件挂载
      - /home/docker/nginx/html:/usr/share/nginx/html #静态资源根目录挂载
      - /home/docker/nginx/log:/var/log/nginx #日志文件挂载
    ports:
      - 80:80
```

### 配置文件

1、进入到容器内部：
```shell
docker exec -it  /bin/bash
```

2、查找配置文件路径：
```shell
find \ -name "*.conf"
```

3、根据查找结果：

/etc/nginx/conf.d/default.conf
/etc/nginx/nginx.conf

#### 配置文件例子

1、[nginx配置文件默认例子-nginx.conf](./assets/nginx.conf)

2、[nginx配置文件默认例子-default.conf](./assets/default.conf)