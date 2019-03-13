//玩家1 玩家2 。。。。
// object   类
// JSON oject 难以完成此job
// 构建 玩家类     es5之前没有 class 关键字
//大写首字母的函数    构造函数
//函数可以构建类？
//如果一个函数首字母大写约束， 就区别于普通函数，运行方式以 new 运行，构造函数
//函数是 js 里的一等对象， js 除了基本数据类型之外， 都是Object ， 函数是可以被运行对象
function Player(name) {
    //js 函数跟其他语言不一样， 函数一定会存在一个this 指针，  总会指向点什么
    //this 指向实例化后的对象（player1）
    console.log(this);
    //this指向一个对象 ， 并且赋予一个属性
    this.name = name;
    this.enemy = null;
}
Player.prototype.win = function (){
    console.log(this.name + "win")
}
Player.prototype.win = function (){
    console.log(this.name + "lose")
//Player();
//将类实例化  类抽象的概念，  对象可以new 出来
var player1 = new Player("皮蛋");
console.log(player1.name + "上线了");
var player2 = new Player("小乖");
console.log(player2.name + "上线了");
//成为对手的过程   来一把
player1.enemy = player2;
player2.enemy = player1;
//游戏过程
player1.win();
player2.lose();
// console.log(player1.name);
// var player2 = new Player("小乖");
// console.log(player2.name);