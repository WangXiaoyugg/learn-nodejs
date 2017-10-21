# learn-nodejs

### 学习目标

学会NodeJs的基本使用

- NodeJs 是什么，相对优势
- 项目代码的调试和初始化
- 基础的常用API
- 开发一个简易的Web static server
- 单元测试 发布
- 开发一个简易的 NodeJs 爬虫

#### NodeJSNodeJs 是什么
- Node.js is a JavaScript runtime built on Chrome's V8
- Node.js use an event-driven , non-blocking I/O model

##### 非阻塞I／O
- 阻塞: I/O 时进程休眠时等待I／O 完成后进行下一步
- 非阻塞： I／O 时函数立即返回，不用等待进程I／O 完成
- I/O 操作非常耗时，耗性能

##### 事件驱动
- I/O 等异步操作结束后通知
- 观察者模式

#### 为什么使用前端偏爱NodeJs
- 前端的职能范围扩大，统一开发经验
- 处理高并发、I／O 密集场景性能优势明显(web 开发)

##### cpu 密集 I/O 密集
- cpu密集 压缩 解压 加密 解密
- I／O 密集 文件操作 网络操作 数据库操作

##### web 常见场景
- 静态资源读取
- 数据库操作
- 渲染页面

##### 高并发解决方式
- 增加机器数
- 增加每台机器的CPU数 - 多核

##### 进程
- 计算机的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
- 多进程： 启动多个进程，多个进程可以执行多个任务

##### NodeJs 工作模型
```
client =>     ----------------
client =>     |             |
client =>     |EventLoop    |   => Non-blocking Worker(C++ thredpool)
client =>  <= |single thread|   <======
              ----------------   callback
```

##### 线程
- 线程是进程内一个相对独立的，可调度的执行单元，与同属一个进程共享进程的资源
- 多线程 是启动一个进程 ，在一个进程内启动多个线程，多个线程也可以一块执行多个任务

##### NodeJs 单线程
- 单线程只是针对主进程，I/O操作系统多线程调度
- 单线程不是单进程

##### 常用场景
- web Server
- 本地代码构建(前端)
- 实用工具开发(性能不一定是最佳)