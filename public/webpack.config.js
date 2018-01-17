module.exports = function(env){
    var compile_mode = env;

    var cleanWebpackPlugin = require('clean-webpack-plugin');
    var uglifyJsPlugin = require('uglify-js-plugin');


    var output = {
        entry: __dirname + '/src/js/main.js',
        output: {
            path: __dirname + '/dist',
            publicPath : "/dist/",
            filename: "app.js",
            chunkFilename: '[name].chunk.js'
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
                }
            ]
        },
        plugins: [
            new cleanWebpackPlugin(['dist/**'],
                {
                    root: '',
                    verbose: true,
                    dry: false
                })
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

    return output;
};