var path = require('path')

module.exports = {
  devServer: {
    port: 2333,
    contentBase: path.join(__dirname, '/../src/'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel!eslint'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.vue$/,
        loader: 'vue!eslint'
      }
    ]
  }
}