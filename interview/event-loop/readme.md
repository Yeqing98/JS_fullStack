## event loop  事件队列
用来处理异步问题
JS是单线程
setTimeout async promise
async task 进入event队列 等待执行
宏任务 微任务 队列 
回调函数加入事件队列中 task queue  执行栈
macrotask(宏任务)  setTimeout setInterval setImmediate I/O UI rendering    一次只执行一个
microtask(微任务)  Promise process.nextTick     优先执行，一次执行完

主线程  C E
macrotask(宏任务)  ['A', 'B']
microtask(微任务)  ['D']
C E D A B