const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');


module.exports = {
    entry: './project/widget/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'widget'),
        libraryTarget: 'amd',
        umdNamedDefine: true,
    },
    optimization: {
        minimize: false,
    },
    externals: {
        jquery: 'jquery',
        backbone: 'backbone',
        underscore: 'underscore',
        twigjs: 'twigjs',
        'lib/components/base/modal': 'lib/components/base/modal',
        'lib/components/base/confirm':'lib/components/base/confirm'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "transform-class-properties",
                            "@babel/plugin-transform-arrow-functions",
                        ]
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin(
            {
                patterns: [
                    {from: './project/widget/manifest.json', to: 'manifest.json'},
                    {from: './project/widget/style.css', to: 'style.css'},
                    {from: './project/widget/i18n/', to: 'i18n'},
                    {from: './project/widget/images', to: 'images'},
                    {from: './project/widget/templates', to: 'templates'},
                ],
            },
        ),
        new ZipPlugin(
            {
                // OPTIONAL: defaults to the Webpack output path (above)
                // can be relative (to Webpack output path) or absolute
                path: path.resolve(__dirname, 'dist'),

                // OPTIONAL: defaults to the Webpack output filename (above) or,
                // if not present, the basename of the path
                filename: 'widget.zip',

                // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },

                // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
                zipOptions: {
                    forceZip64Format: false,
                },
            },
        ),
    ],
};