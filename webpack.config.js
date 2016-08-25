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
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
