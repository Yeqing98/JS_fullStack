一万条数据，要插入到网页中， 要怎么做？
DOM  注意

- 内存开销最大的在动态DOM
  DOM开销是最耗内存的
  createElement
  怎么样可以优化呢
  cloneNode  节点克隆
- innerHTML
  10000DOM显示是负担
  延迟加载 图片，
  分屏加载 html
  绘制 html  重绘和重排  导致网页卡顿

- 不能一下搞定  分屏加载
  10000   
  - 数据分页  page   上一页的数据   当前页的数据   下一页的数据
    前端自主分页
  - 防抖 + onscroll
    跟onReachBottom 一样  
    当前的数据， 超出了视窗  viewport