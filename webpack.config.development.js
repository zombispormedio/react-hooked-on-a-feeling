require("dotenv").config();
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open: true,
    openPage: "",
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
});
