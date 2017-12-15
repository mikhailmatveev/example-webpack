const path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            query: {
                presets: ['env']
            },
            test: /\.js$/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    stats: {
        colors: true
    }
};
