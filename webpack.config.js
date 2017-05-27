module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
// const webpack = require('webpack')
// const path = require('path')

// const extractCommons = new webpack.optimize.CommonsChunkPlugin({
//     name: 'commons',
//     filename: 'commons.js'
// })

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractCSS = new ExtractTextPlugin('[name].bundle.css')

// const config = {
//     context: path.resolve(__dirname, 'src'),
//     entry: {
//         app: './main.ts',
//         //admin: './admin.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/dist/',
//         filename: '[name].bundle.js'
//     }, resolve: {
//         extensions: ['.ts']
//     },
//     module: {
//         rules: [{
//             test: /\.(png|jpg)$/,
//             include: path.resolve(__dirname, 'src'),
//             use: [{
//                 loader: 'url-loader',
//                 options: { limit: 10000 } // Convert images < 10k to base64 strings
//             }]
//         }, {
//             test: /\.scss$/,
//             include: path.resolve(__dirname, 'src'),
//             loader: extractCSS.extract(['css-loader', 'sass-loader'])
//         }, {
//             test: /\.js$/,
//             include: path.resolve(__dirname, 'src'),
//             use: [{
//                 loader: 'babel-loader',
//                 options: { presets: ['es2015'] }
//             }]
//         }],
//         loaders: [
//             {
//                 test: /.ts$/,
//                 loader: 'ts-loader'
//             }
//         ]
//     },
//     plugins: [
//         new webpack.NamedModulesPlugin(),
//         extractCommons,
//         extractCSS
//     ]
// }

// module.exports = config
