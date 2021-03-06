/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    return config;
  }
}));