## 跨域
浏览器的安全策略， 
协议  域名  端口  有一个不一致的时候，就存在跨域问题

第一种解决办法
## cors
cross origin resource share
1. 一个标准， 规定了一些 http 的 首部字段，  让服务器允许哪些网站可以访问。
2. 规定， 如果是非简单请求， 浏览器会先发一个预检请求， 从服务端知道是否允许跨域，如果允许，才会发出正式的请求。
3. 非简单请求， 简单请求

## jsonp原理
1. script 标签 可以跨域。
2. 加载进来的内容，会被当做js执行。
3. 后端 先获取到 前端发出的 callback 在 callback 里面插入自己想要的内容
4. 前端 拿到返回的内容当做 js 运行。
5. 预先定义好一个函数
6. 缺点： 只能get请求
7. 写一个 promise 风格的jsonp函数
jsonp(url, param = {})
    .then(res => {
        console.log(res)
    })
1. 一个全局的方法
2. 插入一个script标签， 根据方法名 param 拼接 url
3. 根据 js 的 加载情况 判断 请求成功与否 返回数据
4. script标签上面 是有一些事件的


## iframe跨域
可以引入一个跨域的html
1. 引入 和 后端接口同源的一个 iframe
2. 该 iframe 不存在跨域问题， 可以任意请求
3. 和 iframe 通信的 postMessage 触发 message事件

## 
同一个页面里面的 所有iframe 共享 window.name

## server 后端
koa-static 映射过  /url

## static 前端
static live-server

前后端 通信   fe-iframe 文件 收到后端的结果 middle 后端 static iframe


## window.name 
1. 引入 和 后端接口同源的一个 iframe
2. iframe 请求 请求结果放在一个共享的 window.name 上面
3. fe-iframe.html 得到请求的结果
4. 请求完成之后，跳转到第三方页面  执行定义在 fe-iframe 里面的回调

## 代理

webpack-dev-server
反向代理：live-server --proxy=/api:http://localhost:8081/api/  
能拿到结果， 对于客户端来说，最终请求的地方是未知的。

正向代理：对于服务端来说，客户是未知的。