- vue react 思路是 mvvm
    不去做DOM这一非常耗费性能的事
    为什么不做DOM呢？  因为不需要操作DOM，  操作data...等 将mvvm的修改（DOM片段）更新到页面上去
    SPA -> PWA  Application  性能特别好

    DOM 树 
    ComponentA  render(JSX)  replaceChild()  -> DOM树

    组件对应的树    遍历
        Tag   node
        属性发生改变 style
        文本发生改变 innerText
        append  li*n
    childTag

    oldState      oldTree
    newState      newTree     virtual DOM
      最后一站 DOM 树
      oldState  DOM树的描述  JS版本的DOM树

      DOM 树，  内存中有JS virtual DOM

- elementObj => 新的virtualDOM
    diff   补丁 补上DOM
        1
      2   3
    4  5 6  7

        1
      2   9
    4  5 6  8
    [{value: 9, index: 2}, {value: 8, index: 6}]
- 先序深度遍历
- patches []   dom diff
- 给DOM打补丁 
