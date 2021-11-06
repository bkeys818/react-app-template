const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type { import('webpack').Configuration } */
module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
}
