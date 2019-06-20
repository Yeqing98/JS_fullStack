## 挂载阶段
第一次渲染
componentWillMount
componentdidMount

## 更新阶段

shouldComponentUpdate
true 更新
false 不更新

componentWillUnmount
清理
定时器
全局的时间绑定

## 切换主题   red blue
// parent
{
    theme: 'red'
}
需要将theme层层传递
父组件 -> 子组件 -> 孙组件
1. 父组件 通过 getChildContext  返回提供的  context  内容
2. 通过父组件的 .childContextTypes 定义提供的  context 类型
3. 子组件获取的时候 .contextTypes  定义接收 context 的类型  this.context 获取

15.xx
重点问题！！！
跨层级传递的时候，假如中间某一组件 shouldComponentUpdate return false 了之后
导致 后代不会更新 content 的数据不能同步。

16.xx
1. 构造 Provider Consumer
2. 父组件 <Provider value={}/>  为组件提供数据
3. 后代组件  <Consumer> {() => {}} </Consumer>  获取数据

state = {
    theme: 'purple',
    toggle: this.handleToggleTheme
}
静态资源  无法获取 实例的 this