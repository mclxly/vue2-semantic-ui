'use strict'
const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')
const path = require('path')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

// push loader for .css file
base.module.loaders.push(
  {
    test: /\.css$/,
    exclude: path.join(__dirname, 'lib'),
    loader: _.cssLoader
  }
  // , {
  //   // test: /\.css$/,
  //   // include: /lib/,
  //   // loader: 'style-loader!css-loader'

  //   test: /\.css$/,
  //   include: path.join(__dirname, 'lib'),
  //   loader: 'style-loader!css-loader'
  // }
)

module.exports = base
