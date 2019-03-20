/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');

module.exports = {
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  'webpack.extend': {
    resolve: {
      alias: {
        jquery: path.resolve('./node_modules/jquery'),
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    },
    module: {
      rules: [
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                mimetype: 'application/font-woff'
              }
            }
          ]
        },
        {
          test: /fonts\/.*\.(eot|svg|ttf|otf)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
        }
      ]
    }
  }
};