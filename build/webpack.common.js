/**
 * Created by toney on 2018/5/2.
 */

const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: path.resolve('src', 'index.js')
    },
    externals: {
        'vue': "Vue",
        'vue-i18n': 'VueI18n'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            path.resolve('src'),
            path.resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-i18n$': 'vue-i18n/dist/vue-i18n',
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 'vue-style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },{
            test: /\.(jpg|png|svg|gif|jpeg)$/,
            use: 'url-loader?limit=8192&name=assets/images/[hash:8].[name].[ext]'
        },{
            test: /\.vue$/,
            use: [ 'vue-loader' ]
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: 'url-loader?limit=8192&name=assets/fonts/[hash:8].[name].[ext]'
        }]
    }
}