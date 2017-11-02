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
      path.resolve('src', 'app'),
      'node_modules'
    ],
    alias: {
      'XWingMiniaturesFont.css$': path.resolve(path.join(__dirname, 'node_modules', 'xwing-miniatures-font', 'dist', 'xwing-miniatures.css'))
    }
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
      }, {
        test: /\.ttf$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
};
