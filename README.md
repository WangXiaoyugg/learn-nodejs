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

### 开发环境
- 官网下载 NodeJS [安装包](http://nodejs.cn/download/) 
- CommonJS 
- global
- process

###### CommonJS
```
console.log(1);

(function (exports,require,module,__filename,__dirname) {
  console.log(1);
});
```
- 每个文件是一个模块，有自己的作用域
- 在模块内部 module 变量代表模块本身
- module.exports 属性代表模块的对外接口

##### require 规则
- / 表示绝对路径 ./表示相对路径
- 支持 js json node 扩展名文件，不写依次尝试
- 不写路径则认为是 build-in 模块 或是各级的node_modules 下的模块

##### require 特性
-  module 被加载的时候执行，加载后缓存
- 一旦出现某个某块被循环加载，只输出自己已执行的部分，还未执行的部分不会输出

##### global
- CommonJS
- Buffer process console
- timer

#### 调试
- Inspector
使用谷歌浏览器调试控制台
node --inspect-brk xxx.js
- VS Code
- WebStorm
- 条件调试

##### path模块
- __diranme ,__filename 总是返回文件的绝对路径
- process.cwd() 总是返回node 执行命令时的路径

##### ./
- require 的方法中总是相对当前的文件所在文件夹
- 在其他地方和 process.cwd() -样，相对node的启动文件夹

#### Buffer
- 用于处理二进制数据流
- 实例类似整数数组，大小固定
- C++代码在V8 在堆外分配物理内存

#### events
- demo/event.js

#### fs
- demo/fs.js

#### promise
- demo/promise.js

#### static Server
- 功能类似 anywhere

#### .gitignore
- 前 / 代表项目根目录
- 后 / 表示目录
- ! 表示取反
- * 表示任意字符
- ？ 匹配一个字符
- ** 匹配多级目录

#### npmignore

#### editorconfig

#### eslint
- eslint --init
- npm scripts
- pre-commit packages

#### supervisor chalk

#### range
- range: bytes = [start]-[end]; 超出范围 416 状态码
- Accept-Ranges:bytes
- Content-Range:bytes  start-end/total

- curl -r 0-20 -i url

#### 缓存
用户请求 => 本地缓存  => 请求资源  => 协商缓存/返回响应
            失败   
本地缓存(没失效)     
           server没改变(失效)    => 协商缓存/返回响应
           yes
本地缓存 <= 304

换图片直接改路径

- Expires, Cache-Control
- If-Modified-Since / Last-Modified
- If-None-Match / ETag
          
          
#### cli
- npm i -g anywhere

使用方法
staticServer # 把当前文件夹作为静态资源服务器的根目录
staticServer -p 8080  # 设置端口号
staticServer -h localhost #设置localhost
staticServer -d /usr    # 设置根目录为usr 

#### 语义化版本号
x.y.z
z => bug fix
y => add functions
x => new version , it can absolute different form last version

x.y.* <=> ~1.2.0
2.x <=> ^2.0.0

#### 发布包
- npmjs.org 注册账号
- npm login 输入 username/password
- npm publish
 
#### git
- git rm -r --cached . 撤销提交
     
           
           