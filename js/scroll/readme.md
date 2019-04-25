兼容性  不行
scroll-behavior: smooth

chrome 支持css， 但是其他主流浏览器不支持怎么办？  
JS 来写

scroll-behavior   在chrome里使用   ie 不支持
兼容  hack  ie js window.scrollTo(0,1/8);   ie里面使用
requestAnimationFrame(递归函数)
浏览器判断