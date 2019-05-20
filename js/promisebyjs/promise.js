function Mypromise(callback) {
    var self = this;
    // 记录状态 null为pending， true为resolve， false为reject
    var state = null;
    // 记录resolve的参数
    var param = null;
    // then方法返回的promise对象的resolve和reject
    var nextResolve = null;
    var nextReject = null;
    // 记录then方法的参数， onFulfilled和onReject
    var asynconFulfilled = null;
    var asynconReject = null;

    // 执行并改变promise的状态
    callback(resolve, reject)

    this.then = function(onFulfilled, onReject) {
        // 返回一个新的promise对象
        return new self.constructor(function(resolve,reject) {
            // 判断异步代码是否执行完毕 （是否resolve或者reject）
            // 若执行完毕，就在then方法里面立即执行，否则的话就将参数记录下来，等待state就绪在执行***函数
            if(state === true) {
                doAsynconFulfilled(onFulfilled, resolve, reject)
            }else if(state === false) {
                doAsynconReject(onReject, resolve, reject)
            }else {
                nextResolve = resolve;
                nextReject = reject;
                asynconFulfilled = onFulfilled;
                asynconReject = onReject;
            }
        })
    }

    // resolve方法
    function resolve(data) {
        state = true;
        param = data;
        if(nextResolve) {
            doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject);
        }
    }
    // reject方法
    function reject(err) {
        state = false;
        param = err;
        if(nextReject) {
            doAsynconReject(asynconReject, nextResolve, nextReject);
        }
    }

    function doAsynconFulfilled(onFulfilled, resolve, reject) {
        window.setTimeout(function() {
            // 判断onFulfilled是否为function，如果不是的话则忽略
            if(typeof onFulfilled === 'function') {
                // 执行onFulfilled方法并获取返回值promise()
                var promise = onFulfilled(param)
                // 如果promise为undefined  执行if
                // 如果promise为Mypromise对象，执行 else if 里面的东西
                // 如果promise为非Mypromise对象，执行else
                if(promise === undefined) {
                    resolve(param);
                }else if(promise.constructor === self.constructor) {
                    // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态，执行resolve或者reject
                    promise.then(function(param) {
                        resolve(param)
                    }, function(param) {
                        reject(param)
                    })    
                }else{
                    // 执行then方法返回对象的resolve
                    resolve(promise)
                }
            }else{
                resolve(param)
            }
        },0)
    }
    function doAsynconReject(onReject, resolve, reject) {
        window.setTimeout(function() {
            if(onReject === 'function') {
                var promise = onReject(param);
                if(promise === undefined) {
                    reject(param)
                }else if(promise.constructor === self.constructor) {
                    promise.then(function(param) {
                        resolve(param)
                    },function(param) {
                        reject(param)
                    })
                }else{
                    reject(promise)
                }
            }else{
                reject(param)
            }
        },0)
    }
}