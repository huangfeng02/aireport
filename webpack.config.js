/**
 * Created by huangfeng on 2016/8/16.
 */
var Webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        // 文件地址，使用绝对路径形式
        filename: '[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/airport/dist/',
        chunkFilename: "[id].chunk.js"//非主入口的文件名(异步组件)不会被打包到entry里
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.(png|jpg|gif)$/,exclude: /src/,loader: "url-loader?limit=8192&name=./img/[name].[ext]"},
            {test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            // 添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下
            {test: /\.js$/, exclude: /node_modules/,loader: "babel"}//es6转换es5
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！"),//注意这是一个数组..
        new ExtractTextPlugin('css/style.css')// 提取入口文件即 index.js 文件 import 'xxx.css' 为qili.css
    ],
    resolve: {
        //root: path.join(__dirname, "./"),
        alias: {
            root: path.join(__dirname, "./"),
            'vue': 'vue/dist/vue.js'
            //import Vue from 'vue'//package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，而 vue 的 package.json 中的 main 指向的是 dist/vue.common.js。
        },
        extensions: ['', '.js', '.json', '.vue', '.scss', '.css']//配置省略文件扩展名的问题
    }
}