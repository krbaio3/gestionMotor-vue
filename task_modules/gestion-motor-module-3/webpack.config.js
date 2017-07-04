let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let ExtractTestPlugin = require('extract-text-webpack-plugin');
let extractCss = new ExtractTestPlugin('bundle.css');

if (process.argv.indexOf('--local') !== -1) {
    const LOCAL = 'local'
}

let basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    entry: {
        app: './main.js',
        appStyles: [
            './app/sass/main.scss',
        ],
        vendor: [
            'jquery',
            'angular',
        ],
    },
    output: {
        path: path.join(basePath, 'dist'),
        filename: '[name].js',
        //chunkhash le pone un codigo delante tambien por la cache
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [{
                test: /\.html$/,
                exclude: /(node_modules|bower_components|index.html)/,
                loader: ['ngtemplate-loader', 'html-loader', 'preprocess-loader?+LOCAL=local'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                //loader: 'babel-loader?presets[]=env!awesome-ts-loader',
                loader: ['preprocess-loader?+LOCAL=local', 'required-loader?import-loader[]=angular']
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: extractCss.extract({
                    fallback: 'style-loader', //orderna de forma determinada. Ejecuta primero css-loader y despues style-loader

                    use: [{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                }),
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /(\.(png|ico|gif|jpg|jpeg|svg)$)/,
                exclude: /node_modules/,
                loader: 'file-loader?name=./assets/img/[name].[ext]'
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8088,
        proxy:{
            "/api":{
                target: "http://localhost:9004/"
            }
        }
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            title: 'Cancelacion de carteras',
            filename: 'index.html', //nombre del fichero que va a tener de salida
            template: 'index.html', //opcional: si hay varios html de entrada, se selecciona esta propiedad para seleccionar el html de entrada
            hash: true, //al bundle le añade un token para evitar que se caché
        }),

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
            filename: '[name].css',
            disable: false,
            allChunks: true, //para que te traiga todos los imports del css. Es decir, si un css importa 2 css más, este plugin te lo hace
        }),
    ]
}