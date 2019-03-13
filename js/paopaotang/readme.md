- 函数有多种运行方式
  Player() 普通方式，
  new player() 作为构造函数constructor被运行， 会有一个返回新对象 （实例）   构造函数  ，当然是类了
  function Person(){  }

- 函数是一等对象， 可以被执行的对象，
  this  ，  借助 this 来构建一个新对象
  var player1 = new Person()  建立完成后，  this 就指向了 player1 Person{}

- new 的过程
  this 空对象person{}
  Person() 构造函数，
  this.name = name