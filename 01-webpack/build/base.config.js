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
            //   {
            //     test: /\.(png|jpg|gif|jpeg)$/i,
            //     use: [
            //       {
            //         loader: 'url-loader',
            //         options: {
            //           limit: 8192,
            //         },
            //       }]},

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
        }
      },
    plugins:[
        new webpack.BannerPlugin('最终版权归粥粥所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
    ],
        
}