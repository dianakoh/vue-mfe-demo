// module.exports = require('./webpack.config');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'resources/js/[contenthash].js',
    path: path.resolve('../', 'dist/angular-app-about'),
    publicPath: '/angular-app-about/' || '/',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.s?css$/,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             importLoaders: 1,
  //           },
  //         },
  //         'postcss-loader',
  //       ],
  //     },
  //   ],
  // },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'resources/js/chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'async',
          reuseExistingChunk: true,
        },
        common: {
          name: 'resources/js/chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'async',
          reuseExistingChunk: true,
        },
      },
    },
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'resources/css/[name].[contenthash].css',
  //   }),
  // ],
});
