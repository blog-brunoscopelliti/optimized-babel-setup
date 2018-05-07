const path = require("path");
const webpack = require("webpack");

const src = path.resolve(__dirname, "src");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      include: src,
      loader: "babel-loader",
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      babelHelpers: [path.resolve(__dirname, "dist", "helpers.js")],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  }
};