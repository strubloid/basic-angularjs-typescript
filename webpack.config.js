const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry : {
        'main' : ["./application/main.ts"]
    },
    output: {
        path: __dirname + '/public/build/',
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    module:  {
        rules: [
            {
                test: /\.tsx?$/, // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
                exclude: /node_modules/,
                use : [
                    'ts-loader'
                ]
            }
        ]
    },
    optimization : {
        splitChunks: {
            cacheGroups: {
                commons : { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all"}
            }
        },
        // We no not want to minimize our code.
        minimize: false
    },
    resolve : {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": false,
        },
    },
    target: "web"
}

