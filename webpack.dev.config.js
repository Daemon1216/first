const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'less-loader',
                    options: {
                      modifyVars: { 'font-size-base': '14px', '@icon-url': '"/iconfont"' },
                    },
                  },
                ],
              },
              {
                test: /\.js$/,
                include: path.join(__dirname, './src'),
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory: true,
                      plugins: [
                        ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
                        'transform-proto-to-assign',
                      ],
                    },
                  },
                ],
              },
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8888
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};
