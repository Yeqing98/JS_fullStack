函数的节流，与防抖

阿里js面试第一题
- 搜索建议
  google suggest
  input value => ajax
  有问题的
  分词 例如：灭霸 电蚊液
  keyup没必要每次都触发ajax 太浪费性能了
  要过滤一些无效的请求，打完一个单词再去搜索

- 防抖的关键
  频繁输入时，怎么减少请求呢?
  debounce(ajax,500)  生成一个函数，控制执行，停止输入时，执行一次 打完一个单词会有意识的停一下
  setTimeout delay 之后一点会执行一次，
  在规定时间内？ 被clear清除
  