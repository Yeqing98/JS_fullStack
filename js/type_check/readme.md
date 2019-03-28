类型 typeof
复杂数据类型  object
Array   是可遍历的对象
Function  是可运行的对象
JSON Object 对象字面量是可以枚举的对象 for(key in)
typeof 半吊子，typeof []  没办法跟 json 区别开来

有一个方法可以区别Array   JSON Object


1. 用对象字面量来做面向对象  区别于原型式的 它没有被实例化的需要  Type. 将在程序中就做 类型检查
var Type = {};  组织代码 

2. 使用for循环，来一次性加完  同步异步的问题  
使用闭包来将 type 作用域闭起来，
立即执行函数， 同步执行，  类型检测函数的定义，因为函数嵌套，  形成闭包
当函数在被调用时 (异步)， 找到定义时刻的type

3. Object.prototype.toString.call(obj)
Object 是什么？  祖先，顶级对象  函数才有 prototype属性，  
原型上有这样的toString方法，解决 typeof的尴尬 "[object object]"
[object Array] 方法的执行方式可以被改变
Object.prototype.toString.call(obj)