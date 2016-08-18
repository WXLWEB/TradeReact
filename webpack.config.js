var path = require('path');
var precss = require('precss')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: "/app/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch:true,
    module: {
       preLoaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel'
       }],
       loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel'
       },{
        test: /\.css$/,
        include: /app/,
        loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
       },{
        test: /\.css$/,
        exclude: /app/,
        loader: 'style!css'
       },{
         test: /\.(png|jpg)$/,
         loader: 'url-loader?limit=8192'
       }]
    },
    postcss: [
      require('autoprefixer')
    ],
    devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      colors: true,//终端中输出结果为彩色
      historyApiFallback: true,//不跳转
      inline: true//实时刷新
    }
}
