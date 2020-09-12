const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};