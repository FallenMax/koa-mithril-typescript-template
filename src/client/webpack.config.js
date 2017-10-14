const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const isDev = process.env.ENV === 'dev'

module.exports = {
  devtool: isDev ? 'inline-source-map' : undefined,
  entry: {
    app: './src/client/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../../dist/public'),
    filename: 'bundle.[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/public']),
    new webpack.optimize.ModuleConcatenationPlugin(),
    isDev ? null : new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Title',
      filename: 'index.html'
    })
  ].filter(Boolean)
}
