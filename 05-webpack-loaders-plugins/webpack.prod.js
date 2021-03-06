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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' }, // injects styles to html DOM
          { loader: 'css-loader' }, // Turns css to js string for webpack
          { loader: 'sass-loader' } // Turns sass to css properties
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