const TerserPlugin = require("terser-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");
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
    }),
    new WebpackPwaManifest({
      name: "Effective Wombat",
      short_name: "Effective Wombat",
      description: "My secret talk",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve("src/images/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
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
