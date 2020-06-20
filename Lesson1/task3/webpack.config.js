const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/review_build',
    },
    module: {
        rules: [{
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.js$/,
                use: ["babel-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}