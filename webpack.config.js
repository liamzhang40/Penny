const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    context: __dirname,
    entry: "./frontend/app",
    output: {
        path: path.resolve(__dirname, "bundles"),
        // On elastic beanstalk
        // publicPath: "static/bundles/",
        // will use enviroment variable to add conditional
        publicPath: "static/bundles/",
        filename: "bundle.js"
    },
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
    ],
    module: {
        rules: [{
            test: [/\.jsx?$/, /\.js?$/],
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            }]
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
