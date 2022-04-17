
// webpack.config.js
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js', 
    },

    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/index.html'), //   шаблон    
            filename: 'index.html', // ім'я вихідного файлу
        }),   
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/about.html'), //   шаблон    
            filename: 'about.html', // ім'я вихідного файлу
        }),  
    ]
};


// webpack.config.js 
// let mode = 'development'

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// if(process.env.NODE_ENV === 'production') {
//     mode='production'
// }
// console.log(mode + ' mode')

// module.exports = {
//     mode: mode,
    
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'webpack Boilerplate',
//             template: path.resolve(__dirname, './src/pages/_index.html'), 
//             filename: 'index.html', // ім'я вихідного файлу
//             template: path.resolve(__dirname, './src/pages/_about.html'), 
//             filename: 'about.html', // ім'я вихідного файлу
//         }),
//     ], 
//     module: {
//         rules:[]
//     },

//     entry: {
//     main: path.resolve(__dirname, './src/index.js'),
//  },
// }




// module.exports = {
//     output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: '[name].bundle.js',
//     },
    
// }
