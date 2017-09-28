module.exports = function(env){
    var compile_mode = env;

    var cleanWebpackPlugin = require('clean-webpack-plugin');
    var uglifyJsPlugin = require('uglify-js-plugin');

    var devtool = "source-map";
    var plugins = [];
    plugins.push(new cleanWebpackPlugin(['build/*.{js,map}', 'build/images/*.{png,jpg,jpeg,gif}'],
        {
            root: '',
            verbose: true,
            dry: false
        }));
    if (compile_mode == "prod") {
        plugins.push(new uglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true, //default 'false', it will display some information in console
            sourceMap: true
        }));
        devtool = "cheap-module-source-map";
    }

    return {
        entry: __dirname + '/src/js/main.js',
        output: {
            path: __dirname + '/build',
            publicPath : "/build/",
            filename: "bundle.js",
            chunkFilename: '[name].chunk.js'
        },
        devtool: devtool,  //生成source file
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
        plugins: plugins
    };
};