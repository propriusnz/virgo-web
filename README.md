##
## 目录规范 （目录规范跟传统的create-react-app是不一样的 因为我们的用的是react的ssr框架nextjs希望大家能先看文档
### src/components
存放组件的地方
### src/components/common
存放通用的大组件
### src/components/hoc
存放高阶组件 （不懂的同学网上查）

### src/components/layout
存放布局的组件
### src/components/navigation
存放有导航功能的组件(Header footer etc.)
### src/components/UI
存放通用视图小组件 (button, icon etc.)
### src/api
api服务的文件夹 (我们使用的axios进行api请求跟后台交互)
### src/api/api
存放api请求的方法
### src/api/server
axios中间件的操作文件 （不要随便改动）
### src/api/serverAPI.config
统一定义接口有利于维护的文件
### src/asserts
存放静态文件的地方 （images, gif etc.）
### src/model
存放模型的地方
### src/redux
存放redux的地方 (不懂redux的网上查)
### src/screen/*
存放一个页面所需的组件的地方 然后在pages组建起来
### src/util
存放一些javascript方法的辅助文件
### pages
每个页面的存放地方
### public
在服务端能静态服务的静态文件文件夹

##
## 运行命令

### next
开发者模式在3000端口（默认）
### next -p 端口号
开发者模式在你自己定义的端口号
### next build (npm run build)
打包
### next start (npm start)
生产模式 （第一次运行的 要先build才能运行）


##
## 注意事项
### 你要想用第三方插件之前 请务必要跟Edwin或者Oliver商量
### next.config.js 和.babelrc 文件不要进行改动
### 尽量使用redux进行组件管理
