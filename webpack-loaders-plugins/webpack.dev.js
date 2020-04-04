const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = {
  entry: './src/main.js', // main entry file, where all other modules must be loading
  output: {
    path: path.resolve(__dirname, 'dist'), // new files created on the fly (old files removed) 
    filename: 'bundle.js'
  },
  mode: 'development', // production is by default
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.ProgressPlugin(handler)
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
        test: /\.jp?g$/,
        use: ['url-loader']
      }
    ]
  }
};