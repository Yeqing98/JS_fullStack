三角恋
三者  ？  
构造函数 constructor
prototype 原型
实例  instance

JS 没有类，只有对象， 都是通过原型来拿到的

通过构造函数Person 生成了person这个实例，  
同时我们在Person 的原型 Person.prototype 定义了 getName方法

构造函数  运行的，  new Person()  this-> 新的实例，空对象 Person{}.name
实例怎么拿到原型对象的方法或属性呢？
1. 任何对象都有__proto__私有属性，这个对象的出处是哪？ 实例和类之间没有血缘关系，
2. 构造函数有prototype属性
3. 原型对象上有constructor属性指向构造函数

js 面向对象是基于原型的
原型链