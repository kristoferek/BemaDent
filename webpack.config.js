
module.exports = {
    entry: ["bootstrap-loader","./app/app.jsx"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: ['/node_modules/', '/psd/'],
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|gif|jpg)$/,
                loader: "file-loader"
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|woff2|eot|svg)$/,
                loader: "url-loader?limit=10000"
            }
        ]
    }
}
