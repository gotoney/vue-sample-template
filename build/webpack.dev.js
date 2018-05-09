/**
 * Created by toney on 2018/5/2.
 */

const webpack = require("webpack")
const merge = require("webpack-merge")
const config = require("../config/index")
const common = require("./webpack.common")
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'development', // 设置运行环境
    devtool: "inline-source-map", // source-map
    output: {
        filename: 'assets/js/[name].[hash:8].dev.js',
        chunkFilename: 'assets/js/[name].[hash:8].dev.chunk.js'
    },
    devServer: { // 基于webpack-dev-server的环境配置: https://segmentfault.com/a/1190000012383015
        contentBase: path.resolve('dist'), // 使用资源
        // hot: true, // 相当于开启HotModuleReplacementPlugin，自带
        historyApiFallback: true, // 接口错误处理
        compress: true, // 代码压缩
        host: config.dev.host,
        port: config.dev.port,
        open: true,
        overlay: { // 浏览器端显示日志
            errors: true,
            warnings: false
        },
        publicPath: '/', // 发布路径，会在根路径基础上加上配置路径
        proxy: config.dev.proxy, // 服务代理
        // quiet: true, // false时，与FriendlyErrorsPlugin插件配套使用，能够更好在终端看到webapck运行的警告和错误
        watchOptions: { // 自定义的监听文件改动
            poll: config.dev.poll,
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash:8].css',
            chunkFilename: "assets/css/[name].[hash:8].chunk.css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'initial', // "initial" | "all"(默认就是all) | "async"
            cacheGroups: {
                'vendor': {
                    test: /node_modules\//,
                    name: 'vendor',
                    priority: -10,
                    enforce: true
                },
                // 'element-ui': {
                //     test: /element-ui\//,
                //     name: 'element',
                //     priority: 1,
                //     enforce: true
                // },
                // 'vue': {
                //     test: /vue\//,
                //     name: 'vue',
                //     priority: 1,
                //     enforce: true
                // }
            }
        },
        // runtimeChunk: {
        //     name: 'manifest'
        // }
    }
})