// [1,2,3,4]   求出它的平均值
const average = (...nums) => nums.reduce((accc, val) => accc + val, 0) / nums.length   //rest  把参数收起来
console.log(average(...[1,2,3,4]))  //spread  把参数展开来