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

const config = {
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
    path: path.resolve(__dirname, `public_html/${projname}_files`),
    publicPath: ''
  },
  resolve: {},
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  devServer: {
    publicPath: '/', //where it compiles
    contentBase: './', //where index.html is
    hot: true
  }
};

//plugin declarations
var extract = new ExtractTextPlugin('bundle.css');
var htmlwebpack = new HtmlWebpackPlugin({
  title: projname,
  filename: '../index.html',
  template: 'dev_html/index.html',
  prefix: `${projname}_files/`,
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
config.plugins = [
  extract,
  htmlwebpack,
  htmlwebpackprefix,
  providePlugin,
  livereload
];

// mode selector
if (MODE == 'build') {
  config.output.path = path.resolve(__dirname, `public_html/${projname}_files`);

  let uglifyjsConfig = {
    sourceMap: false,
    uglifyOptions: {
      output: {
        comments: false,
        beautify: false,
        unused: true
      },
      compress: {
        dead_code: true,
        global_defs: {
          DEBUG: false
        }
      }
    }
  };
  config.plugins.push(new uglifyJS(uglifyjsConfig));
} else if (MODE == 'dev') {
  config.output.path = path.resolve(__dirname, '');
  htmlwebpack.options.prefix = '';
  htmlwebpack.options.filename = 'index.html';
  config.module.rules[1].use[0].loader = `file-loader?name=${projname}_files/[name].[ext]`;
}

module.exports = config;
