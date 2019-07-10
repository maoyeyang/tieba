# 仿百度贴吧,基于 vue 全家桶(无 ssr)+stylus+iview+better-scroll 的 webapp

这是本人第一次用 vue+koa+sequelize 写项目,所以一些稍微复杂一点业务逻辑都没办法写(主要是 sequelize 用不来)

由于项目写了也应该有 15 天了

再写下去也不过是切页面,没有技术的提升,就告一段落了,去学习新的知识

代码质量自己看来是比较低的(比对他人代码,没有进一步的封装,没有常量的分离,没有很合理目录结构,有很多的重复代码)

项目里一些需要提的点:

1. css 布局主要采用 flex 布局,主要原因有两个,一是百度贴吧项目的布局比较简单,二是相对 grid 布局 flex 布局自己用的更熟练

2. 后端设置 cookie 时,会出现问题,时灵时不灵,所以采用登录后的回调手动设置 cookie(至今不知道具体原因,有知道的大佬可以跟我讲下原因)

3. 登录方面验证主要 jwt 验证,所以不安全,加密只有一个 bcrypt 加密密码

4. 功能上,有缺陷,搜索页没有写,tabbar 的发布页没有写(吧内的发布写了,只支持图片,评论无法来回评论,只能评论到该贴,只能发文字,原因是首次尝试 node 后端有点写不来)

可以进步的点:

1. css 代码重复有点多,主要是 icon 的定义,采用 span 加 background 定义的(基本没有复用),以后会慢慢的写一写自己常用的 stylus 代码

2. ui 框架的选型有问题,选了 iview, 不太适合 webapp,应该采用 vant 等优秀的移动端 ui 框架,但发现的太晚,只能将错就错

3. 数据都是页面加载时,请求来的,导致很耗费资源,没有合理的应用 vuex 的状态管理(主要不太清楚哪些数据要存,哪些不要存,以后要注意)

4. 项目的目录结构有一定的问题,组件化思想不够彻底,组件化混乱,有时间一定要理一理

确实项目做久了,就没有了最初的兴趣,后面写的变草率了,UI 是越来越难看了(简约风的 UI 果然很难驾驭)

希望以后能越来越好,记录自己的每一个脚印(vue + koa + sequelize)
