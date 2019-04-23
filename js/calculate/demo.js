// 面向对象  创建很多个对象  策略对象
var Bounce = function(salary) {
    this.salary = salary
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);
}
var PerformanceS = function() {}
PerformanceS.prototype.calculate = function(salary) {
    return salary * 5;
}
var PerformanceA = function() {}
PerformanceA.prototype.calculate = function(salary) {
    return salary * 3;
}
var PerformanceB = function() {}
PerformanceB.prototype.calculate = function(salary) {
    return salary * 2;
}
var PerformanceC = function() {}
PerformanceC.prototype.calculate = function(salary) {
    return salary * 1;
}
const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

const bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceA());
console.log(bounce2.getBounce());