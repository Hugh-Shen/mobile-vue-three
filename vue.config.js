const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    hot: true,
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/assets/styles/reset.css'),
        resolve('src/assets/styles/variable.scss')
      ]
    }
  }
}
