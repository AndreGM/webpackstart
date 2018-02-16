const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
        about: './src/about.js',
        maintenance: './src/maintenance.js',
        plconf: './src/plconf.js'

    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, "node_modules/"), path.resolve(__dirname, "src/vendor/")],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/[name].styles.css'),
        new CopyWebpackPlugin([{  // copy assets to public folder
            from: __dirname + '/src/img',
            to: __dirname + '/dist/img'
        }], { debug: 'debug' }),
        new CopyWebpackPlugin([{  // copy assets to public folder
            from: __dirname + '/src/vendor',
            to: __dirname + '/dist/vendor'
        }], { debug: 'debug' }),
        new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/views/index.html',
                chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/views/about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
             filename: 'maintenance.html',
             template: 'src/views/maintenance.html',
             chunks: ['maintenance']
        }),
        new HtmlWebpackPlugin({
            filename: 'plconf.html',
            template: 'src/views/plconf.html',
            chunks: ['plconf']
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000 during development
                host: 'localhost',
                port: 3000,

                // Proxy the Webpack Dev Server endPoint
                // serving at http://localhost:3100
                // through BrowserSyncs
                proxy: 'http://localhost:8080'
            },
            // plugin options
            {
                // prevent BrowserSync reload the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        )
    ]
};
