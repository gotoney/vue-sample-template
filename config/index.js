/**
 * Created by toney on 2018/5/2.
 */

const path = require("path")

module.exports = {

    dev: { // dev config
        host: 'localhost',
        port: 1024,
        proxy: { // 配置代理，当服务器处于不同域时 http://localhost:8080/proxy/user => http://server.com/user
            '/proxy': {
                target: 'http://server.com', // 目标服务器
                changeOrigin: true, // 将本地服务器映射为远程服务器
                pathRewrite: {
                    '^/proxy': '' // 匹配带proxy的路径重写为空，即去掉路径中的proxy
                }
            }
        },
        poll: false
    },
    build: { // prod config
        index: path.resolve('dist', 'index.html'), // 根据模版生成的文件全路径
        root: path.resolve('dist') // 构建根路径
    }
}