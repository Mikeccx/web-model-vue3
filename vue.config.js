module.exports = {
  publicPath: `/web-model`,
  css: {
    requireModuleExtension: true,
  },
  // 本地代理配置
  devServer: {
    open: false,
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 9999,
    https: false,
    hotOnly: false,
    compress: true,
    proxy: {
      "/ehrService": {
        target: "http://www.kkdev.cn/",
        changeOrigin: true,
        ws: false
      }
    }
  }
}
