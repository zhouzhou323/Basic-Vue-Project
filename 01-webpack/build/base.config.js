const path = require('path');
const webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom
        // 使用多个loader时是从右到左
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.less$/,
                use: [
                    {
                      loader: 'style-loader',
                    },
                    {
                      loader: 'css-loader',
                    },
                    {
                      loader: 'less-loader',
                      options: {
                        lessOptions: {
                          strictMath: true,
                        },
                      },
                    },
                  ],
              },
              {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片大于limit时，需要使用file-loader模块进行加载
                      limit: 8192,
                      name: 'img/[name].[hash:8].[ext]'
                    },
                  }]},

          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
              test:/\.vue$/,
              use:['vue-loader']
          }
        ]
      },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions:['.js','.css','.vue']
      },
    plugins:[
        new webpack.BannerPlugin('最终版权归粥粥所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
    ],
        
}