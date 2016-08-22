var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  plugins: [ new HtmlWebpackPlugin() ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /bower_components/,
        loader: 'babel'
      }
    ]
  }
}
