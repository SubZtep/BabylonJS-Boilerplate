const
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/js/main.js'),
    path.resolve(__dirname, 'src/pug/index.pug'),
    path.resolve(__dirname, 'src/scss/main.scss')
  ],
  resolve: {
    enforceExtension: false,
    alias: {
      Engine: path.resolve(__dirname, 'src/js/engine/'),
      Scene: path.resolve(__dirname, 'src/js/scene/'),
      Objects: path.resolve(__dirname, 'src/js/objects/')
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pug/index.pug')
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
