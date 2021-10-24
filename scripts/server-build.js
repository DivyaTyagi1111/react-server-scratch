"use strict";

const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

webpack(
  {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'hidden-source-map':'cheap-module-eval-source-map',
    target:'node',
    externals: [nodeExternals({
      allowlist: [/^@babel\/runtime/],
  })],
    entry: [path.resolve(__dirname, "../server/api.server.js")],
    output: {
      path: path.resolve(__dirname, "../build/server"),
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
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
              }
            ]
          },
        
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
          chunkFilename: 'css/[id].css'
        }),

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