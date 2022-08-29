# Linux

## 常用命令

### 查找进程

```shell
ps -aux|grep java
```
`java` 代表查找的进程内容

### 查找文件

```shell
find / -name "*.conf"
```
`/` 代表查找位置，`" "` 代表查找内容

### 杀死进程

```shell
kill -9 PID
```
`PID` 代表进程的 pid 号，`9` 代表 Kill signal，可以使用 `kill -l` 查看 Linux 下的所有信号

## 系统服务管理

* systemctl
> `systemctl`命令是`service`和`chkconfig`命令的组合体，可用于管理系统。

### 输出系统中各个服务的状态

```shell
systemctl list-units --type=service
```

### 查看服务的运行状态

```shell
systemctl status firewalld
```

### 关闭服务

```shell
systemctl stop firewalld
```

### 启动服务

```shell
systemctl start firewalld
```

### 禁止服务开机自启动

```shell
systemctl disable firewalld
```

### 设置服务开机自启动

```shell
systemctl enable firewalld
```

### 查看是否已设置开机启动

```shell
systemctl list-unit-files | grep firewalld
```

## 文件管理

### 显示系统内存状态（单位MB）

```shell
free -m
```

### 查看即时活跃的进程，类似Windows的任务管理器

```shell
top
```

### 新建文件

```shell
touch test.txt
```

### 删除文件、删除文件夹

* 删除文件
```shell
rm test.txt
```

* 删除文件夹
```shell
rm -rf test/
```

### 拷贝文件

```shell
cp -r /home/docker/source /home/docker/target
```
`-r` 表示复制的数据会使用新的时间戳等信息，`/home/docker/source` 表示源文件，`/home/docker/target` 表示目标文件

### 移动、覆盖文件或文件夹

```shell
mv /home/docker/source /home/docker/target
```

## 解压和压缩
> `z` 通过 gzip 支持压缩或解压缩，`x` 解压，`c` 打包，`v` 在压缩或解压缩过程中显示正在处理的文件名，`f` 后面必须跟上要处理的文件名

### 解压

```shell
tar -zxvf target.tar.gz
```

```shell
tar -xvf target.tar
```

### 压缩

```shell
tar -zcvf target.tar.gz target1.txt target2.txt target3.txt
```

```shell
tar -cvf target.tar target1.txt target2.txt target3.txt
```

## 磁盘和网络管理

### 查看磁盘空间占用情况

```shell
df -hT
```

## 文件上传下载

### 安装上传下载工具 `lrzsz`

```shell
yum install -y lrzsz
```

### 上传文件，输入以下命令会弹出文件上传框

```shell
rz
```

### 下载文件，输入以下命令会弹出文件保存框

```shell
sz fileName
```

## 软件的安装与管理

* rpm 包
> RPM 是 Red-Hat Package Manager 的缩写，一种 Linux 下通用的软件包管理方式，可用于安装和管理 `.rpm` 结尾的软件包。

### rpm 安装软件包

```shell
rpm -ivh nginx-1.12.2-2.el7.x86_64.rpm
```
`ivh` 显示安装进度

## 防火墙 Firewall

### 开启防火墙

```shell
systemctl start firewalld
```

### 关闭防火墙

```shell
systemctl stop firewalld
```

### 查看防火墙状态

```shell
systemctl status firewalld
```

### 设置开机启动

```shell
systemctl enable firewalld
```

### 禁用开机启动

```shell
systemctl disable firewalld
```

### 重启防火墙

```shell
firewall-cmd --reload
```

### 开放端口（修改后需要重启防火墙方可生效）

```shell
firewall-cmd --zone=public --add-port=8080/tcp --permanent
```

### 查看开放的端口

```shell
firewall-cmd --list-ports
```

### 关闭端口

```shell
firewall-cmd --zone=public --remove-port=8080/tcp --permanent
```