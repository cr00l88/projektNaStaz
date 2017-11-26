const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: ['./app', './main.scss'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundled.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([
            {from: 'assets', to: './assets/'},
            {from: 'index.html', to: './'}
        ])
    ],
    context: __dirname + '/src',
    devServer: {
        contentBase: __dirname + "/src",
        publicPath: '/',
        // host: '192.168.1.101',
        watchContentBase: true
    }
}