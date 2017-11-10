const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const uglifyJS = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPrefixPlugin = require('html-webpack-prefix-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MODE = process.env.npm_lifecycle_event;
const projname = 'Template';

const clientConfig = {
  entry: './dev_html/js/main.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, `docs/${projname}_files`),
    publicPath: ''
  },
  devServer: {
    publicPath: '/', //where it compiles
    contentBase: './', //where index.html is
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

//plugin declarations
var extract = new ExtractTextPlugin('bundle.css');
var htmlwebpack = new HtmlWebpackPlugin({
  title: projname,
  filename: '../index.html',
  template: 'dev_html/index.html',
  prefix: `/${projname}_files/`,
  minify: {
    removeComments: true
  }
});
var htmlwebpackprefix = new HtmlWebpackPrefixPlugin();
var providePlugin = new webpack.ProvidePlugin({
  //
});

var livereload = new LiveReloadPlugin();
//end plugins declarations

//insert plugins
clientConfig.plugins = [
  extract,
  htmlwebpack,
  htmlwebpackprefix,
  providePlugin,
  livereload
];

// mode selector
if (MODE == 'build') {
  clientConfig.output.path = path.resolve(__dirname, `docs/${projname}_files`);
  clientConfig.plugins.push(
    new uglifyJS({
      sourceMap: false,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
          unused: true
        },
        compress: {
          dead_code: true,
          global_defs: { DEBUG: false }
        }
      }
    })
  );
} else if (MODE == 'dev') {
  clientConfig.output.path = path.resolve(__dirname, '');
  htmlwebpack.options.prefix = '/';
  htmlwebpack.options.filename = 'index.html';
  clientConfig.module.rules[1].use[0].loader = `file-loader?name=${projname}_files/[name].[ext]`;
}

module.exports = [clientConfig];
