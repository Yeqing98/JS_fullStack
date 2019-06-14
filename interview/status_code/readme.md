HTTP协议   req  response
状态码：  HTTP响应 (response) 中包含状态码
浏览器  代理  proxy
1XX  请求已经正在处理，继续等待
2XX  以2开头的，代表请求已经成功处理掉了  200  OK  
3XX  重定向  Location
4XX  用户出现错误（地址错了） 未授权限  受限资源  404 not found
5XX  服务器端出现错误  


301  永久跳转，
用户  www.xiaomi.com
告诉蜘蛛，
www.xiaomi.com/a.html   这个网站废弃了
301  www.mi.com/a.html

302  临时跳转，  不会告诉蜘蛛  或在前端缓存


3XX  区别，  301是永久跳转， 告诉蜘蛛把记录更新掉
301  可以在改变状态码， 不变， 来展示
http://localhost:3000  301 永久跳转，当再次访问的时候， 因为浏览器有缓存，不需要走服务器了