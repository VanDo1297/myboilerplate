const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 1024 * 1024,
                            esModule: false,
                        }
                    },
                ],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },{
                test: /\.(mov|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico'
        })
    ],
};