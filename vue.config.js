module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            // 修改它的选项...
            return options
          })
        
         config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('source-map')
      )
    },
    // 跨域设置
    devServer: {
        proxy:"http://localhost:5000/"
    }
}