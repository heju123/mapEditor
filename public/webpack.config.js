module.exports = function(env){
    var compile_mode = env;

    var webpack = require('webpack');
    var cleanWebpackPlugin = require('clean-webpack-plugin');
    var uglifyJsPlugin = require('uglify-js-plugin');
    var htmlWebpackPlugin = require('html-webpack-plugin');
    var copyWebpackPlugin = require('copy-webpack-plugin');

    var output = {
        entry: __dirname + '/src/js/main.js',
        output: {
            path: __dirname + '/dist',
            publicPath : "/dist/",
            filename: "app.[chunkhash].js",
            chunkFilename: '[name].[chunkhash].chunk.js'
        },
        devtool: "source-map",  //生成source file
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }]
                }
            ]
        },
        plugins: [
            new cleanWebpackPlugin(['dist/**'],
                {
                    root: '',
                    verbose: true,
                    dry: false
                }),
            // keep module.id stable when vender modules does not change
            new webpack.HashedModuleIdsPlugin()
        ]
    };

    if (compile_mode == "prod") {
        output.plugins.push(new uglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true, //default 'false', it will display some information in console
            sourceMap: true
        }));
        output.devtool = "cheap-module-source-map";
    }

    output.plugins.push(new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            minifyCSS: true
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }));

    output.plugins.push(new copyWebpackPlugin([
        { from: 'src/images', to: 'images' },
        { from: 'src/libs', to: 'libs' }
    ]));

    return output;
};