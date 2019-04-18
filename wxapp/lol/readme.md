- 小程序是个伟大的产品，
Android/IOS 两套代码
小程序使用前端开发思路，和技术， 基于微信大APP， APP开发
1. 一份代码，到处运行
2. 前端开发，速度很快
3. 基于微信，性能良好

1. wxml = html
   新的标签或组件，  view = div
   wxss = css
   js
   page = wxml + wxss + js
   App = 多个page

2. wxml wxss js 三者转换的很方便
   写结构
   写样式
   js 约定  事件函数只要加在
   page({
       ,
       bind...: function(){

       }
   })
   bindtap = "bind..."