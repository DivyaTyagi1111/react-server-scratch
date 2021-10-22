"use strict";

// const glob = require("glob");
const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

rimraf.sync(path.resolve(__dirname, "../build"));
const isProduction = process.env.NODE_ENV === 'production';

webpack(
  {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'hidden-source-map':'cheap-module-eval-source-map',
    target:'web',
    entry: [path.resolve(__dirname, "../src/index.client.js")],
    output: {
      path: path.resolve(__dirname, "../build"),//export to build/client
      filename: "main-client.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            'css-loader'
          ],
          exclude: /\.module\.css$/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new ReactServerWebpackPlugin({ isServer: false }),
      // new BundleAnalyzerPlugin()

    ],
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.log('Finished running webpack with errors.');
      info.errors.forEach((e) => console.error(e));
      process.exit(1);
    } else {
      console.log('Finished running webpack-client');
    }
  }
);

// function getCSSFiles(src, callback) {
//   glob(src + "/**/*.css", callback);
// };
