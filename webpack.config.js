const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'demo/index.html'),
});

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'demo/index.js'),
  output: {
    path: path.resolve(__dirname, 'demo/build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'demo'), // html所在路径
    compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true, // 打包完成后自动打开网页
  },
};
