vue开发， 分为两部分
组件开发（协作）  vue 数据管理 （应用程序的数据流 难）

store 超市
new Vuex.Store({
    state
})
中央    组件 地方
读  this.$store.state.count

写  actions,  mutations  getters,    公司的概念
vuex 不是什么时候都要，     大项目的时候，离不开vuex      小项目的时候，不需要vuex
比如： 一个项目就是一个大公司， state就是老板，CEO
mutations 就相当于财务， 管理者   唯一可以修改 state 的




- Vue 实现核心mvvm，  其他的通过 Vue.use()  插入进去
读
    this.$store
    this.$router
写

- data()  将会被 state 取代
  data 只是自身状态的数据
  methods  改变状态的方法， 会是actions