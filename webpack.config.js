const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTestPlugin = require('extract-text-webpack-plugin');

const basePath = __dirname;


if (process.argv.indexOf('-p') !== -1) {
  process.env.NODE_ENV = 'production';
  console.log('PRODUCTION');
} else {
  console.log('LOCAL');
}


module.exports = {
  context: path.join(basePath, './'),
  entry: {
    app: './src/main.js',
    // appStyles: [
    //   '.src/app/sass/main.scss',
    // ],
    vendor: [
      'jquery',
      'angular',
      'angular-sanitize',
      'angular-ui-bootstrap',
      'bankia-cl-ui-ccc',
      'bankia-cl-ui-document',
      'bankia-core-subprocesses',
      'bankia-core-swl',
      'bankia-neo-cl-ui-flows',
      'bankia-neo-ui-dialog',
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      }],
    },
    {
      test: /\.html$/,
      // exclude: /(node_modules|bower_components|index.html)/,
      exclude: /(node_modules|bower_components|index.html)/,
      loader: ['ngtemplate-loader', 'html-loader'],
    },
    {
      test: require.resolve('./bower_components/bankia-core-moduleloader/dist/bankia-core-moduleloader.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: require.resolve('./bower_components/bankia-core-modulemanager/dist/bankia-core-modulemanager.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular,Rx=rxjs'],
    },
    {
      test: require.resolve('./bower_components/bankia-core-sipconnector/dist/bankia-core-sipconnector.js'),
      use: ['imports-loader?$=jquery,jQuery=jquery,angular'],
    },
    {
      test: require.resolve('./bower_components/bankia-core-siptaskmanager/dist/siptaskmanager-tpls.js'),
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
    {
      test: /\.manifest\.json$/,
      use: 'file-loader?name=./[name].[ext]',
    },
    {
      test: /task_modules\\(.+\\dist)/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: './tasks/[1][name].[ext]',
            regExp: /task_modules\\(.+\\dist\\)/,
          },
        },
      ],
    },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://localhost:9004/',
      },
    },
  },
  plugins: [
        // //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   title: 'Cancelacion de carteras',
    //   filename: 'index.html', // nombre del fichero que va a tener de salida
    //   template: 'index.html', // opcional: si hay varios html de entrada, se selecciona esta propiedad para seleccionar el html de entrada
    //   hash: true, //al bundle le añade un token para evitar que se caché
    // }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
            // angular: 'angular',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'], //si no separamos en app y vendor, cada vez que usamos una libreria de terceros, copia y pega el codigo, esto optimiza lo repetido en un vendor
            //todo el codigo comun lo quita y lo pone en vendor
    }),
    new ExtractTestPlugin({
            // filename: '[name].css',
      filename: 'styles.css',
      disable: false,
      allChunks: true,
    }),
  ],
};
