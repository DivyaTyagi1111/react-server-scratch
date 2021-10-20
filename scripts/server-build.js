"use strict";

// const glob = require("glob");
const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");
const { node } = require("webpack");
const nodeExternals = require('webpack-node-externals');

// rimraf.sync(path.resolve(__dirname, "../build/server"));
const isProduction = process.env.NODE_ENV === 'production';

webpack(
  {
    mode: isProduction ? 'production' : 'development',
    target:'node',
    externals: [nodeExternals()],
    entry: [path.resolve(__dirname, "../server/api.server.js")],
    output: {
      path: path.resolve(__dirname, "../build/server"),//export to build/client
      filename: "main-server.js",
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
            test: /\.css$/i,
            use: [/*"style-loader",*/ "css-loader"],
          },
        
      ],
    },
    plugins: [
    //   new HtmlWebpackPlugin({
    //     // inject: true,
    //     template: path.resolve(__dirname, "../build/index.html"),
    //   }),
      new ReactServerWebpackPlugin({ isServer: false }),
      // new BundleAnalyzerPlugin()

    ],
  resolve: {
      alias: {
          "react-writer": path.resolve(__dirname,"../node_modules/react-server-dom-webpack/writer.node.server")
      }
  },
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
      console.log('Finished running webpack-server');
    }
  }
);