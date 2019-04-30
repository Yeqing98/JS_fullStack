- 组件思维
  弹窗组合了一些标签，在一起形成了独立的弹窗功能，在其他界面里，也要用到，
  组合成一个独立的组件， 叫做 <dialog />
  页面是由组件拼装而成的。

- 组件语法
  同于Page 又有异
  Conponent({
      data: { },
      properties: {
          <!-- 属性类型定义 -->
          title: {
              type: String,
              value: '标题'
          }
      },
      methods: {
          
      }
  })