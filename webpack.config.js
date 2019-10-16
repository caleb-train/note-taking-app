const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.join(__dirname, "client", "index.jsx"),
  output: {
    path: path.join(__dirname, "public/client"),
    publicPath: "/",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: process.env.NODE_ENV === 'development' ? 'file-loader' : 'ignore-loader',
            options: {},
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, "src"), path.join(__dirname, "assets")],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  }
};
