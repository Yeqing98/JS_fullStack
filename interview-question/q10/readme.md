# 原型和实例的关系:

每个构造函数(constructor)都有一个原型对象(prototype),原型对象都包含一个指向构造函数的指针,而实例(instance)都包含一个指向原型对象的内部指针.


# 什么是原型链：
即: constructor1.prototype = instance2
鉴于上述游戏规则生效,如果试图引用constructor1构造的实例instance1的某个属性p1:
1).首先会在instance1内部属性中找一遍;
2).接着会在instance1.__proto__(constructor1.prototype)中找一遍,而constructor1.prototype 实际上是instance2, 也就是说在instance2中寻找该属性p1;
3).如果instance2中还是没有,此时程序不会灰心,它会继续在instance2.__proto__(constructor2.prototype)中寻找...直至Object的原型对象

这种搜索的轨迹,形似一条长链, 又因prototype在这个游戏规则中充当链接的作用,于是我们把这种实例与原型的链条称作 原型链 . 


# 判断原型与实例的关系
方法一般有两种.

第一种是使用 instanceof 操作符, 只要用这个操作符来测试实例(instance)与原型链中出现过的构造函数,结果就会返回true. 以下几行代码就说明了这点.

alert(instance instanceof Object);//true
alert(instance instanceof Father);//true
alert(instance instanceof Son);//true
复制代码由于原型链的关系, 我们可以说instance 是 Object, Father 或 Son中任何一个类型的实例. 因此, 这三个构造函数的结果都返回了true.

第二种是使用 isPrototypeOf() 方法, 同样只要是原型链中出现过的原型,isPrototypeOf() 方法就会返回true, 如下所示.

alert(Object.prototype.isPrototypeOf(instance));//true
alert(Father.prototype.isPrototypeOf(instance));//true
alert(Son.prototype.isPrototypeOf(instance));//true


# 使用原型链会有那些问题？

问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;  （如1.js所示）

问题二: 在创建子类型(例如创建Son的实例)时,不能向超类型(例如Father)的构造函数中传递参数.

# 如何解决原型链的问题？

1：经典继承（如2.js）

2：组合继承（如3.js）
