const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
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
      // '/ehrService': {
      //     target: 'http://localapi.natapp1.cc',
      //     changeOrigin: true
      // },
      "/ehrService": {
        target: "http://www.kkdev.cn/",
        changeOrigin: true
      }
      // '/ehrService': {
      //   target: 'http://172.20.200.110:8080',
      //   changeOrigin: true
      // }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
      .set("plugins", resolve("./src/plugins"))
      .set("api", resolve("./src/api"))
      .set("views", resolve("./src/views"));
  }
};
