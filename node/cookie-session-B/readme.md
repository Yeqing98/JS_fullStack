## why

无状态

## cookie

本地存储的
怎么来：
1. js document.cookie 可读 可写
2. 服务端  通过 Set-Cookie  响应头设置 cookie

内容：
name: 
value:
path:  cookie 在哪个路径下生效

/                          /             所有路径
/user                      /user         user以及user 下面的路径
/user/abc                  /user/abc     user/abc 以及下面的路径

domain:

httpOnly:   有true和false之分，  如果设置成true 就不能通过js获取 cookie 的值。（为了保护隐私）
                                如果设置成false 就可以通过js 获取
maxAge: 在几秒之后 cookie 删除。
koa: ms    js: s
secure(安全):   只会在 https 协议下传输



作用范围：
domain + path
在什么域名什么路径下面生效
浏览器检查存储的 cookie，  会 发送给 服务端
而且： http 传输报文的大小。
发送的时候 放在 Cookie 请求头里面

用途：
状态管理，       true
用户个性化设置    false



##  session
会话
靠后台语言自己实现的
很多个用户 产生很多个 session

userId
sessionId   用户会话的时候，  通过自己的sessionId，查询自己的状态，
cookie：  sessionId = id