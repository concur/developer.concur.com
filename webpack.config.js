const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./app-management/entry.jsx'],
  output: {
    path: path.resolve(__dirname, './src/assets/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-3']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['DEVCENTER_API_FORMS'])
  ]
}
