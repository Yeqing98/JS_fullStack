// function Person(name) {
//     this.name = name
// }

// let p = new Person()

// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype
// Function.__proto__ = Object.prototype

// var foo = {}
//     F = function() {};
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(foo.b)
// console.log(F.a)
// console.log(F.b)

// function Person(name) {
//     this.name = name
//     // return 66
// }

// let p = new Person("wn")
// console.log(p)
// 构造函数是不需要返回值的， 使用new来创建时， 如果return的是非对象，会忽略返回值。  如果return的是对象， 则返回该对象

function Person(name) {
    this.name = name
    // return 66
}
function Student() {

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student
let p = new Student("wn")
console.log(p instanceof Person)

// for(var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }
// let每次循环生成一个封闭的块级作用域和setTimeout绑定， var每次循环会覆盖上一次的作用域


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

// for in   
// 1、里面的index是索引为字符串的数组， 不能进行几何运算
// 2、遍历的顺序有可能不是按照实际数组的内部顺序
// 3、使用for in 会遍历数组所有的可枚举属性  包括原型
// for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引（键名），  for of 遍历的是数组的元素
// for of 遍历的只是数组的元素， 不包括数组的原型属性和索引


let gArr = [1,[2,3],4,5,[6,[7,8]]]

function dispatch(arr) {
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        const arr3 = arr[i]
        if(Array.isArray(arr3)) {
            res = res.concat(dispatch(arr3))
        }else{
            res.push(arr3)
        }
        
    }
    return res;
}

function outPut(arr) {
    return arr.reduce(function(pre, item) {
        return pre.concat(Array.isArray(item) ? outPut(item) : item);
    }, [])
}

console.log(dispatch(gArr))
console.log(outPut(gArr))
