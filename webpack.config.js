const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ["env"] }
                    }
                ]
            }
        ]
    }
}