// for in 迭代 和 for of 有什么区别
Array.prototype.method = function() {
    console.log('aaa')
}
var myArr = [1,2,3,4,5,6,7]
myArr.name = '123'
for(let index of myArr) {
    console.log(index)
}
for(let index in myArr) {
    console.log(myArr[index])
}