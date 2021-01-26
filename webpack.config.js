'use strict'

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    // index: './index.js',
    index: './index.js',
  },
  target: ['web', 'es5'],
  context: path.resolve(__dirname),
  watchOptions: {
    ignored: /(node_modules|dist)/,
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].js',
    // publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      //   exclude: '/node_modules/',
      // },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
    ],
  },
  resolve: {},
  devtool: 'source-map',
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // compress: {
          //   drop_console: true,
          // },
        },
      }),
    ],
  },
}
