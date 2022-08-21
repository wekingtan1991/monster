<!-- ---
title: Java笔记
date: '2022-04-21'
sidebar: 'auto'
--- -->
# Java

## Java 对象的创建过程

类加载检查 -> 分配内存 -> 初始化零值 -> 对象头配置 -> 执行 init 方法

（妈妈准备生孩子，看看是否做好了准备 -> 给孩子分配床位 -> 分配一个小名 -> 孩子基因序列 -> 生孩子）

## 双校验单例

```java
public class Singleton{
  private volatile static Singleton uniqueInstance;
  private Singleton(){

  }
  public static void Singleton getUniqueInstance(){
    if(uniqueInstance == null){
      synchronized(Singleton.class){
        if(uniqueInstance == null){
          uniqueInstance = new Singleton();
        }
      }
    }
    return uniqueInstance;
  }
}
```

## [Docker 配置 MySQL 的主从复制](http://itboyhub.com/2021/01/28/docker-mysql/)

## [Spring IOC 容器源码分析](https://javadoop.com/post/spring-ioc)

## [聊聊 MyBatis 缓存机制](https://tech.meituan.com/2018/01/19/mybatis-cache.html)
