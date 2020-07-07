module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Redsoft_test/'
    : '/'
  ,
  css: {
    requireModuleExtension: true
  },

  productionSourceMap: false
}