"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

rimraf.sync(path.resolve(__dirname, "../build"));

// To copy css files to public folder
// getCSSFiles(".", function (err, res) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     res.forEach((file) => {
//       if (String(file).includes("node_modules")) return;
//       const from_file = file;
//       const to_file = `public/css/${String(file).split("/").slice(-1)[0]}`;
//       console.log(`copying ${from_file} to ${to_file}`);
//       fs.copyFile(from_file, to_file, (e) => {});
//     });
//   }
// });

webpack(
  {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: [path.resolve(__dirname, "../src/index.client.js")],
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "main.js",
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
        // {
        //     test: /\.css$/,
        //     use: [
        //       'style-loader',
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           importLoaders: 1,
        //           modules: true
        //         }
        //       }
        //     ],
        //     include: /\.module\.css$/
        //   },
        // {
        //   test: /\.css$/,
        //   use: [
        //     'style-loader',
        //     'css-loader'
        //   ],
        //   exclude: /\.module\.css$/,
        // },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new ReactServerWebpackPlugin({ isServer: false }),
    ],
  },
  (d) => {}
);

// function getCSSFiles(src, callback) {
//   glob(src + "/**/*.css", callback);
// };
