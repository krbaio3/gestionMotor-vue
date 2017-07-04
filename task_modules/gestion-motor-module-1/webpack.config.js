const path = require('path');
const router = require('./webpack.constants.js')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTestPlugin = require('extract-text-webpack-plugin');
// const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basePath = __dirname;

const config = {
    basePath: path.join(basePath, 'src'),
    namejs: 'bankia-module-impediments.js',
    namecss: 'bankia-module-impediments.css',
    namehtml: 'bankia-module-impediments.html'
};

let entry,
    htmlWebpackPlugin, exclude;

if (process.argv.indexOf('-p') !== -1) {
    process.env.NODE_ENV = 'production';
    console.log('PRODUCTION');
} else {
    console.log('LOCAL');
    console.log(router);
}

if (process.env.NODE_ENV === 'production') {
    exclude = {
        excludeHtml: /(node_modules|bower_components|impediments.html|index.html)/,
        excludeJs: /(node_modules|bower_components|main.js)/,
    };
    entry = {
        app: './scripts/index.js',
        // app: 'src/scripts/impediments.module.js',
        // appStyles: './styles/main.scss',
    };
    output = {
        filename: config.namejs,
    };
    optimize = {
        name: [],
    };

    plugin = {
        html: new CopyWebpackPlugin([{
            from: './views/impediments.html',
            to: '../dist/bankia-module-impediments.html'
        }, ]),
    };
} else {
    exclude = {
        excludeHtml: /(node_modules|bower_components|impediments.html|index.html)/,
        excludeJs: /(node_modules|bower_components|index.js)/,
    };
    entry = {
        app: './main.js',
        appStyles: [
            './styles/main.scss',
        ],
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
        ]
    };
    output = {
        filename: '[name].' + config.namejs,
    };
    optimize = {
        name: ['vendor', 'manifest'],
    };
    plugin = {
        html : new HtmlWebpackPlugin({
            title: 'Cancelacion de carteras',
            filename: 'index.html', //nombre del fichero que va a tener de salida
            template: 'index.html', //opcional: si hay varios html de entrada, se selecciona esta propiedad para seleccionar el html de entrada
            hash: true, //al bundle le añade un token para evitar que se caché
        }),
    }
}


module.exports = {
    context: config.basePath,
    entry: entry,
    output: {
        path: path.join(basePath, 'dist'),
        filename: output.filename,
        // library: [output.filename, "[name]"],
        // libraryTarget:"umd"
        //para crear libreria UMD
        //chunkhash le pone un codigo delante tambien por la cache
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
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
                // loader: 'babel-loader?presets[]=env!awesome-ts-loader',
                // loader: 'babel-loader?presets[]=env',
                // loader: ['preprocess-loader?+LOCAL=local', 'required-loader?imports-loader[]=angular', 'imports-loader?$=jquery,jQuery=jquery,angular']
                // loader: ['imports-loader?$=jquery,jQuery=jquery,angular']
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    },
                }, ],
                // use: [
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['es2015']
                //         },
                //     },
                //     {
                //         loader: 'imports-loader?$=jquery,jQuery=jquery,angular'
                //     },
                // ],
                // use:[
                //     {
                //         loader: 'ng-annotate-loader',
                //         options: {
                //             // add:true,
                //             es6: true
                //         },
                //     },
                //     {
                //         loader: 'imports-loader?$=jquery,jQuery=jquery,angular'
                //     },
                // ],
            },
            {
                test: require.resolve('./bower_components/bankia-ui-checkbox/dist/checkbox-tpls.js'),
                use: ['imports-loader?$=jquery,jQuery=jquery,angular']
            },
            {
                test: require.resolve('./bower_components/bankia-ui-radio/dist/radio-tpls.js'),
                use: ['imports-loader?$=jquery,jQuery=jquery,angular']
            },
            {
                test: require.resolve('./bower_components/atmira-ui-select/dist/atmiraSelect.js'),
                use: ['imports-loader?$=jquery,jQuery=jquery,angular']
            },
            {
                test: require.resolve('./bower_components/bankia-ui-decimal/dist/decimal.js'),
                use: ['imports-loader?$=jquery,jQuery=jquery,angular']
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTestPlugin.extract({
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
        contentBase: './src',
        port: 8088,
        proxy: {
            "/api": {
                target: "http://localhost:9004/"
            }
        }
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     title: 'Cancelacion de carteras',
        //     filename: htmlWebpackPlugin.filename, //nombre del fichero que va a tener de salida
        //     template: htmlWebpackPlugin.template, //opcional: si hay varios html de entrada, se selecciona esta propiedad para seleccionar el html de entrada
        //     hash: true, //al bundle le añade un token para evitar que se caché
        // }),
        // new CopyWebpackPlugin([
        //     // {output}/file.txt
        //     {
        //         from: 'views/impediments.html',
        //         to: '../dist/bankia-module-impediments.html'
        //     },
        // ]),
        plugin.html,
        
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: optimize.name,
            // name: ['vendor', 'manifest'], 
            //si no separamos en app y vendor, cada vez que usamos una libreria de terceros, copia y pega el codigo, esto optimiza lo repetido en un vendor
            //manifest: todo el codigo comun lo quita y lo pone en vendor
        }),
        new ExtractTestPlugin({
            filename: config.namecss,
            disable: false,
            allChunks: true, //para que te traiga todos los imports del css. Es decir, si un css importa 2 css más, este plugin te lo hace
        }),
        // new NgAnnotatePlugin({
        //     add: true,
        //     es6: true,
        // }),
    ]
}