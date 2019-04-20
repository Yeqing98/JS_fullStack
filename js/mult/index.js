// 缓存计算结果  不要重复计算   把计算的结果保存下来  保存在哪里呢？  用什么方式呢？
let cache = {

};
function mult(){
    // 参数数量是不定的
    let a = 1;
    // 和 args 相关  数组变成 string
    let key = Array.prototype.join.call(arguments,',');
    if(cache[key]){
        console.log('从缓存中取出来')
        return cache[key];
    }
    for(var i = 0, l = arguments.length;i < l; i++){
        a = a * arguments[i];
    }
    cache[key] = a;
    return a;
}
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));