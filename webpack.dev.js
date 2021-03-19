/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            template: './public/index.html',
            minify: false,
        }),
    ],
    devtool: 'eval-cheap-source-map',
    devServer: {
        open: true,
        // watchContentBase: true, // false by default, if enabled, changes will trigger full page reload
        contentBase: path.join(__dirname, 'dist/'),
        host: 'localhost',
        port: '3000',
        // writeToDisk: true, // false by default
        // injectClient: true, // true by default, if false hot reloading won't work
    },
})
