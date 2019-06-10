const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackTemplate = require("html-webpack-template");

const outputDir = "public";

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, outputDir)
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
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 10000,
              mimetype: "image/svg+xml"
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/png"
            }
          }
        ]
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/gif"
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",

            options: {
              mimetype: "image/jpg"
            }
          }
        ]
      },
      {
        test: /\.txt$/i,
        use: "raw-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      appMountId: "root",
      template: HtmlWebpackTemplate,
      title: "React Hooked On A Feeling"
    }),
    new CopyPlugin([{ from: "static" }])
  ]
};
