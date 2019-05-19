const TerserPlugin = require("terser-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
});
