// 打包配置
// 如果没有这个文件，默认配置
// src/ 开发目录
// dist/ 
// src/index.js
const path = require('path')
module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        // babel,
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            }
        ]
        // stylus,
        // 静态配置
    },
    resolve: {
        extensions: ['.js']
    }
}