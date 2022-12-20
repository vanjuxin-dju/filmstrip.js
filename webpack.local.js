const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "development",
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
});