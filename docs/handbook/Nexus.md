# Nexus3

## docker 部署

```bash
docker run -d -p 8081:8081 \
-p 8082:8082 -p 8083:8083 -p 8084:8084 \
-v /home/docker/nexus/nexus-data:/nexus-data \
--name nexus3 sonatype/nexus3
```

## 问题

### 1、初始密码查找

>"Your admin user password is located in /nexus-data/admin.password on the server."

### 方法：

1. 通过命令 find / -name 'admin.password' 找到 admin.password 位置

2、使用 cat [admin.password 位置]

3、root 前面的一串字符就是初始密码

## 参考

* [使用nexus3搭建maven私服（超详细，建议收藏）](https://blog.csdn.net/A_art_xiang/article/details/120522631)