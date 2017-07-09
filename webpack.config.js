var webpack = require('webpack');
var path = require('path');
var saveLicense = require('uglify-save-license');
var LicenseWebpackPlugin = require('license-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;
var isProd = NODE_ENV === 'prod';

console.log('isProd: ' + isProd);

module.exports = {
  entry: path.resolve(__dirname, 'js/app/main.js'),

  resolve: {
    extensions: ['.js']
  },

  devtool: isProd ? 'source-map' : 'eval',
  output: {
    path: isProd ? path.resolve(__dirname, "dist/js") : path.resolve(__dirname, "js"),
    filename: 'bundle.js',
  },
  plugins: isProd ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      test: /.js/i,
      extractComments: true
    }),

    new LicenseWebpackPlugin({
      pattern: /^(MIT|ISC|BSD.*)$/,
      unacceptablePattern: /GPL/,
      abortOnUnacceptableLicense: true
    })
  ]: [],
};