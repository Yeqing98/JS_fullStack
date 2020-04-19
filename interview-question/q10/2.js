function Father(){
	this.colors = ["red","blue","green"];
}
function Son(){
	Father.call(this);//继承了Father,且向父类型传递参数
}
var instance1 = new Son();
instance1.colors.push("black");
console.log(instance1.colors);

var instance2 = new Son();
console.log(instance2.colors);

// 如果仅仅借用构造函数,那么将无法避免构造函数模式存在的问题--方法都在构造函数中定义, 
// 因此函数复用也就不可用了.而且超类型(如Father)中定义的方法,对子类型而言也是不可见的. 
// 考虑此,借用构造函数的技术也很少单独使用.