const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
  entry: './src/main.js', // main entry file, where all other modules must be loading
  output: {
    path: path.resolve(__dirname, 'dist'), // new files created on the fly (old files removed) 
    filename: 'bundle.js'
  },
  mode: 'production', // production is by default
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
            {loader: 'url-loader', options: {limit: 5000}}
        ]
      }
    ]
  },
  devtool: "source-maps"
};