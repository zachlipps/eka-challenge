const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/client/app/index.js'),
  output: {
    path: path.join(__dirname, '/src/bundles'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js?$/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
