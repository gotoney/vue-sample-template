/**
 * Created by toney on 2018/5/2.
 */

const common = require("./webpack.common")
const config = require("../config/index")
const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const webpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCSSPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    // devtool: "source-map",
    output: {
        path: config.build.root, // 存放路径
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: 'assets/js/[name].[chunkhash].chunk.js'
    },
    plugins: [
        new htmlWebpackPlugin({ // https://segmentfault.com/a/1190000007294861
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            // favicon: 'favicon.ico',
            title: 'vue-sample',
            minify: { // html 代码压缩
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new cleanWebpackPlugin(['*'],{ // 编译前删除历史文件
            root: path.resolve("dist")
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash:8].css',
            chunkFilename: "assets/css/[id].[hash:8].chunk.css"
        }),
        new webpackBundleAnalyzer(),
        new optimizeCSSPlugin({
            safe: true // css代码压缩
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: { // == CommonChunkPlugin插件
            chunks: 'initial',
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
        runtimeChunk: {
            name: 'manifest'
        }
    }
})