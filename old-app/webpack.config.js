const path = require("path");
const dotenv = require("./node_modules/dotenv");
const webpack = require('./node_modules/webpack');
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");
const MiniCssExtractPlugin = require("./node_modules/mini-css-extract-plugin");
const TerserPlugin = require("./node_modules/terser-webpack-plugin");
const WorkBoxPlugin = require("./node_modules/workbox-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("./node_modules/optimize-css-assets-webpack-plugin");

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, "app/client", "index.jsx"),
    ]
  },
  output: {
    path: path.join(__dirname, "public/client"),
    publicPath: "/",
    filename: "index.js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: process.env.NODE_ENV === 'development' ? 'file-loader' : 'ignore-loader',
          options: {},
        }, ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app/client", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[id].css"
    }),
    new WorkBoxPlugin.InjectManifest({
      swSrc: 'src-sw.js',
      swDest: './sw.js',
      globDirectory: './assets',
      globPatterns: ['*.{png,webp,jpg,html,css}']
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};