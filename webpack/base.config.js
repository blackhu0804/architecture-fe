const path = require('path');
const entry = require('./entry');
const ExtractTextPlugin = require("extract-text-webpack-plugin");;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: path.resolve(process.cwd(), "src/app"),
  entry: entry,
  watch: true,
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].js"
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      title: 'sale',
      template: path.resolve(
        process.cwd(),
        'src/base/webpack.template.html'
      ),
      filename: 'sale.html',
      chunks: ['sale'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'less-lhttps://github.com/jantimon/html-webpack-pluginoader']
        })
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]",
        options: {
          name: 'assets/[name]_[sha512:hash:base64:7].[ext]'
        }
      }
    ]
  }

}