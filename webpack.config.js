require('webpack');

var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/'
  },
  resolve: {
    modules: [
      path.resolve('./src/'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react' ]
        }
      }, { 
        test: /\.css$/,
        use: [
          { loader: 'style-loader', },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
};
