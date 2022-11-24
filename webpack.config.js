const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    "bundle": "./src/index.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".css", ".less"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "public")
    },
    port: 3300,
    devMiddleware: {
        index: true,
        publicPath: "http://localhost:3300/dist/"
    },
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin()
  ]
};