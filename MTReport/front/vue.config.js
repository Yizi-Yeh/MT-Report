module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  },
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },
  
}