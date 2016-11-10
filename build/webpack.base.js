'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')
const _ = require('./utils')

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: _.outputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components'),
      // adding our externals libs
      'semantic': path.resolve(__dirname, '../lib/semantic-ui/dist/semantic.min.js')
      // 'semantic': path.resolve(__dirname, '../node_modules/semantic-ui/dist/semantic.min.js')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: ['/node_modules/', '/lib/']
      },
      {
        test: /\.es6$/,
        loaders: ['babel']
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // , {
      //   // Do not transform vendor's CSS with CSS-modules
      //   // The point is that they remain in global scope.
      //   // Since we require these CSS files in our JS or CSS files,
      //   // they will be a part of our compilation either way.
      //   // So, no need for ExtractTextPlugin here.
      //   test: /\.css$/,
      //   include: path.join(__dirname, 'lib'),
      //   loader: 'style-loader!css-loader'
      // }
    ]
  },
  babel: config.babel,
  postcss: config.postcss,
  vue: {
    loaders: {},
    postcss: config.postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: __dirname + '/index.html',
      filename: _.outputIndexPath
    }),
    new webpack.ProvidePlugin({
      // Now jQuery is available for ALL the aplication and components.
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      // semantic-ui | TODO : is usefull since we import it
      semantic: 'semantic',
      Semantic: 'semantic-ui',
      'semantic-ui': 'semantic-ui'
    })
  ],
  target: _.target
}
