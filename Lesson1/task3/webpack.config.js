const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
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
            template: "./src/index.html"
        })
    ]
}