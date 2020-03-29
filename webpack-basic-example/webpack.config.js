const path = require('path');

module.exports = {
  entry: './main.js', // main entry file, where all other modules must be loading
  output: {
    path: path.resolve(__dirname, 'dist'), // new files created on the fly (old files removed) 
    filename: 'bundle.js'
  },
  mode: 'development' // production is by default
};