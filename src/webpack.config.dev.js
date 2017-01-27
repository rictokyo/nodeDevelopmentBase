import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'html/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'html'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
      // Create HTML file that includes references to bundled JS.
      new HtmlWebpackPlugin({
        template: 'html/index.html',
        inject: true
      })
    ],
    module: {
        loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}
