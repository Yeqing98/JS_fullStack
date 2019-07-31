## crossorigin  可以引用到所有跨域请求的标签上面
link img script
代表要和后端协商跨域
1. anonymous
   在请求头中 加上 Origin 属性
   如果后端未设置 Access-control-allow-origin， 资源就会出错
   script 标签中没有设置 CORS 跨域 js 发生错误
   将会将 window.onerror 提供很少的信息， 通过 crossorigin 就可以得到很详细的信息

2. use-credentials
   请求时候会带上 cookie 

## image 标签 
1. 通过图片 src 上报日志， 不浪费 ajax 资源，
   204 No Content， 只需要知道返回成功不需要数据， 省掉多余的数据传输。


## localStorage
同一个域名共享 localStorage 有大小限制
怎么扩容
iframe