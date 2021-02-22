module.exports = {
    devServer: {
        host: '127.0.0.1',  // 主机名，一般就这么填写
        port: 8001, // 当前服务器的端口号
        open: false, // vue项目启动时自动打开浏览器
        https:false,
        proxy: {
            '/api': { // '/'是代理标识，用于告诉服务器，url前面是/的就是使用代理的
                // target: "http://212.64.79.16:88", //目标地址，一般是指后台服务器地址
                // target:'http://172.20.10.8:8000',
                target:'http://127.0.0.1:8090',
                changeOrigin: true, //是否跨域
                ws:true,
                pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                    '^/api': "" 
                }
            }
        }
    },
    // 用户体验优先，就不必要省流量了
    // chainWebpack:config=>{
    //     config.plugins.delete('prefetch') // 删除页面引用js时的rel="prefetch" ,禁止后台异步下载暂时不需要的其它页面组件---节约流量
    //                                      // 等需要的时候再去下载，属于更懒的加载
    //                                       // 懒加载是异步下载js文件，将来使用时加载
    // }
}