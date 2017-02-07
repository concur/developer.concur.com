const webpack = require('webpack');

module.exports = {
  entry: ['./app-management/entry.jsx'],
  output: {
    path: './assets/js',
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
          presets: [['es2015', { modules: false }], 'react', 'stage-3']
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
    new webpack.EnvironmentPlugin(['API_SERVER'])
  ]
}
