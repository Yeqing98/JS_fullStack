- npm run 运行script里的 各种工作流脚本
  一定要在根目录里面运行
  1. dev 开发时运行脚本
  2. start 启动服务器脚本
  和 live-server 一样
  3. build 开发完以后，一键build 生成上线   （压缩过后的）

- webpack bundle  打包工具，  一切皆可打包
  1. webpack src/index.js  打包入口   dist/main.js
  2. webpack-cli 命令行工具
  3. webpack-dev-server  运行webpack编译的同时，启动8080端口， web-server


- html template
  1. css
  2. js

- resolve里extensions 加后缀
  module里加 rules: [
      规则
      js -> babel -> loader -> preset -> env
      css -> style -> loader,
      css ->loader
      stylus -> stylus
      stylus -> loader
  ]

- 一切皆可打包， 打包成为可运行的js
  生成的文件， 最好js css 分家，
  一个文件，一个http请求
  并发多个请求 拆成少数几个文件， js css 分离， 这是必须的
  
