- DOM 之后 MVVM 兴起
MVVM 封装了DOM(VUE REACT) 让其高效

- 组件开发   UI开发
  分为多个组件， 拼装页面，
  是一个类，
  实例化一下， 就可以用了
  可以复用

- 组件是一个粽子， 里面有很多东西
  template    render()
  css
  js  isLiked

- React 和 vue 都是 MVVM 的一种实现
  React用来做后台界面   Vue用来做用户界面
  挂载点   界面和组件的关系， 界面 <- 组件 <- html
  DOM被封装进去了，  成为组件类
  constructor  this.state  数据部分
  模板  render  

  setData 方法

- 模板里数据的细化
  es6字符串模板 每次编译
  setState this.render();
  状态和模板结合的地方在模板里面编译， 插入数据
  setState 驱动模板重新编译一下  数据驱动