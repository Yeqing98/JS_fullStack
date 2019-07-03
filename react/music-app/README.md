## react-router-dom
Switch 只显示符合 path 的第一个组件
不加 switch 符合 path 的所有组件

#
https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038555542&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&jsonpCallback=callback

## this.setState
1. 异步
2. 合并

## jsonp
const OPTION = {
    param: 'jsonpCallback',
    prefix: 'callback'
}
?jsonpCallback=xxx
xxx 可以固定死
jsonp jquery
每次请求的 callback(xxx) 都是不一样的， 加上随机值
callback_1
callback_2
callback_3
prefix 的作用就是自动生成随机值 帮助 callback 加上 + _1

## Lazyload
监听原生的滚动
现在用的是  css3 transform