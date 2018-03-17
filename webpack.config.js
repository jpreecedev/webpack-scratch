const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    desktop: "./client/index",
    mobile: "./client/index.mobile",
    another: "./client/another"
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".scss"]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css"
    })
  ]
};
