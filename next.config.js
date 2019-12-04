/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config()
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const debug = process.env.NODE_ENV == "production";

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
      debug ? new webpack.EnvironmentPlugin(process.env) :
      new Dotenv({
        path: './.env_dev'
      })
    )

    return config;
  },
  assetPrefix: debug ? `${process.env.HEROKU_APP_NAME_PREFIX}${process.env.HEROKU_APP_NAME}${process.env.HEROKU_APP_NAME_SUFFIX}${process.env.URL}` : ''
}));