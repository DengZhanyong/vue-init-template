module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.175.206:80/api/cyitce/pifs',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
  css: {
    loaderOptions: {
      stylus: {
        prependData: `@import "~@/assets/css/config.less";`
      }
    }
  }
}