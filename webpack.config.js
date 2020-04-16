const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: path.join(__dirname, './example/app.js'),
    output: {
      path: path.join(__dirname, './example/dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.(js|jsx)/, use: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './example/index.html')
      })
    ],
    devServer: {
      port: 3000
    },
    mode: 'development'
  };
};
