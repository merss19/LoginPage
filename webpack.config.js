

module.exports = {
    entry: './src/index.js',
    output:{
        path:'dist',
        filename: 'main.js'
    },
    library:"home",
    watch:true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },


            {
                test: /\.sass$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'file?name=assets/fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=assets/images/[name].[hash].[ext]'
            }

        ]
    },
    devServer: {
        port: 3000
    }
}
