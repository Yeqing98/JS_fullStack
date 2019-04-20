// 全局变量太多   cache只为mult服务
// 会造成空间的污染   
// 函数里面的变量使用后会自动销毁
const mult = (function(){
    const cache = {};
    return function(...args){
        let key = Array.prototype.join.call(args,',');
        if(key in cache){
            console.log('从缓存中取出来')
            return cache[key];
        }
        let a = 1;
        for(var i = 0, l = args.length;i < l; i++){
            a = a * args[i];
        }
        cache[key] = a;
        return a;
    }
})()


console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));