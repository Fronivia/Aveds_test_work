const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: "icss",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.module\.scss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            url: true,
                            modules: {
                                mode: "local",
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[name]--[local]--[hash:base64:5]"
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png)/,
                use: ["file-loader"]
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                    },
                }],
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
                dependency: { not: ['url'] }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@src": path.resolve(__dirname, "src"),
        }
    }
}
