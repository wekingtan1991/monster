<!-- ---
title: Git笔记
date: '2022-06-07'
sidebar: 'auto'
--- -->
# Git

## 问题

### Github 报 22

>"ssh: connect to host github.com port 22: Connection refused"

#### 方法：
    
1、首先到 [ipaddress](https://www.ipaddress.com) 输入 `github.com` 查找到其IP地址

2、将查到的 IP 地址和网址映射放到你的本地 hosts 文件中即可，例子：`140.82.112.4 github.com`