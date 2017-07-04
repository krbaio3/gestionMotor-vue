const path = require('path');
const router = require('./webpack.constants.js')();
const webpack = require('webpack');
const ExtractTestPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basePath = __dirname;

const context = {
  context: path.join(basePath, router.src),
};
const exclude = {
  excludeHtml: /(node_modules|bower_components|impediments.html|index.html)/,
  excludeJs: /(node_modules|bower_components|main.js)/,
};
const entry = {
  app: router.entryProduction,
};
const output = {
  path: path.join(basePath, router.dist),
  filename: router.namejs,
};
const optimize = {
  name: [],
};

module.exports = {
  context: context.context,
  entry,
  output,
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.html$/,
      exclude: exclude.excludeHtml,
      loader: ['ngtemplate-loader', 'html-loader'],
    },
    {
      test: /\.js$/,
      exclude: exclude.excludeJs,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      }],
    },
    {
      test: require.resolve('../../bower_components/bankia-ui-checkbox/dist/checkbox-tpls.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: require.resolve('../../bower_components/bankia-ui-radio/dist/radio-tpls.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: require.resolve('../../bower_components/atmira-ui-select/dist/atmiraSelect.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: require.resolve('../../bower_components/bankia-ui-decimal/dist/decimal.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      loader: ExtractTestPlugin.extract({
        fallback: 'style-loader',

        use: [{
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
        ],
      }),
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]',
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]',
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]',
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]',
    },
    {
      test: /(\.(png|ico|gif|jpg|jpeg|svg)$)/,
      exclude: /node_modules/,
      loader: 'file-loader?name=./assets/img/[name].[ext]',
    },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: router.src,
    port: router.port,
    proxy: {
      '/api': {
        target: router.mockPort,
      },
    },
  },
  plugins: [

    new CopyWebpackPlugin([{
      from: router.copyHtmlFrom,
      to: router.copyHtmlTo,
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: optimize.name,
    }),
    new ExtractTestPlugin({
      filename: router.namecss,
      disable: false,
      allChunks: true,
    }),
  ],
};
