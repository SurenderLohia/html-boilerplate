var webpack = require('webpack');
var path = require('path');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: path.resolve(__dirname, 'js/app/main.js'),
  devtool: PROD ? 'eval' : 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
};