## rollup
tree shaking
没用到的代码  不会被打包

## parcel
零配置

## webpack 4.0
production 会自动开启tree shaking  把没用的代码抖出去
作用域里面的代码无法分析

## css-module
命名冲突
利用 hash 值 解决命名冲突

## webpack 3.0
import(/* webpackChunkName: 'async' */ )
magic comment 魔法注释
异步加载模块的

应用： 路由

import home from 'lazy!./components/home'

用babel-loader 检测有没有 lazy!
换成 magic comment
