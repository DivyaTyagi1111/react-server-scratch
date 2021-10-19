const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

module.exports = {
    entry:'./src/index.client.js',
    output: {
        path: path.join(__dirname,'build'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template:'./public/index.html'
        }),
        new ReactServerWebpackPlugin({ isServer: false }),
    ]
}