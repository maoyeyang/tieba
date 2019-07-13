# 仿百度贴吧,基于 vue 全家桶(无 ssr)+stylus+iview+better-scroll 的 webapp

这是本人第一次用 vue+koa+sequelize 写项目,所以一些稍微复杂一点业务逻辑都没办法写(求一个复杂的 sequelize 项目)

项目的基本功能完成，再写下去也不过是切页面,没有技术的提升,就告一段落了,去学习新的知识

## 项目启动

> 这只是前端项目的启动，[后端源码](https://github.com/maoyeyang/tieba-koa)

1. npm i

2. npm run dev

3. 前端项目 默认是 127.0.0.1:8080 (注意修改)

## 项目里一些需要提的点

1. 该项目的权限控制只采用了一个 token，比较简单，但不是很安全。有兴趣可以看看[权限控制](https://juejin.im/post/5d22bac55188255d7439ad5a)

2. 由于前后端分离写的代码，所以导致登录认证时设置的 cookie 不能在前端取到(应该是域名访问的问题，取出来是 undefined)，所以只能将 token 信息传给前端，让前端自己设置 cookie(权益之计，不建议采用)

3. 没有 API，也没写爬虫，所以数据都是手写的，数据量很少，所以一些效果无法实现。

4. 最近看过的帖子和最近访问的吧， 这两个模块的数据是采用 localStorage 存数据，其它的数据均来自后端

5. 登录方面验证主要 jwt 验证,所以不安全,加密只有一个 bcrypt 加密密码

## 最后

整个项目写下来，也有不少的问题。主要还是整体性上有欠缺，组件化不够彻底。UI 风格上还是没办法和百度贴吧一致(有一定的偏差)。

希望以后能越来越好,记录自己的每一个脚印(vue + koa + sequelize)

2019.7.13 添加

另外本人是 2020 届的毕业生，现在正面临着实习，有没有大佬给个面试的机会。

QQ:673842307

Email:673842307@qq.com
