const
  webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  config = {
    entry: {
      main: './src/js/main.js',
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
          }
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file-loader?name=files/[name].[ext]'
        },
        {
          test: /\.(pdf|jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=files/[name].[ext]'
        },
      ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'docs/'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html', inject: false }),
    ],
    devServer: {
      hot: true,
      historyApiFallback: { index: 'index.html' }
    }
  }

if (process.env.NODE_ENV == 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
        warnings: false,
      },
      sourceMap: true
    })
  )
}

module.exports = config