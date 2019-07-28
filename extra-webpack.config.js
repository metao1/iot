const webpack = require('webpack');

module.exports = {
  module: {
      rules: [
          {
              test: /\.ts$/,
              enforce: 'pre',
              use: [
                  {
                      loader: 'tslint-loader',
                      options: { /* Loader options go here */ }
                  }
              ]
          }
      ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}
