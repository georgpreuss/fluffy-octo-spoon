/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
// const CompressionPlugin = require('compression-webpack-plugin')
// const zlib = require('zlib')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin(),
        // new CompressionPlugin({
        //     filename: '[path][base].br',
        //     algorithm: 'brotliCompress',
        //     test: /\.(js|tsx|css|html|svg)$/,
        //     compressionOptions: {
        //         params: {
        //             [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        //         },
        //     },
        //     threshold: 10240,
        //     minRatio: 0.8,
        //     deleteOriginalAssets: false,
        // }),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist'),
    },
    optimization: {
        minimizer: [new TerserPlugin({ extractComments: false })],
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
})
