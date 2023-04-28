/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const isLocalEnv = process.env.VUE_APP_ENV === 'local';
const configureWebpackProd = {
  mode: 'production',
  devtool: 'source-map',
};
const configureWebpackDev = {
  mode: 'development',
  devtool: 'source-map',
};
const configureWebpack = isProduction ? configureWebpackProd : configureWebpackDev;

console.log(
  '[ENV Info]',
  'process.env.NODE_ENV: ',
  process.env.NODE_ENV,
  ', process.env.VUE_APP_ENV: ',
  process.env.VUE_APP_ENV
);

module.exports = defineConfig({
  assetsDir: isLocalEnv ? 'resource/' : './resources/',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: isLocalEnv ? 'auto' : '/common-components',
  devServer: {
    port: 8084,
    historyApiFallback: true,
  },
  configureWebpack: {
    ...configureWebpack,
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
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'commonComponents',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './BaseCard.vue': './src/components/card/BaseCard.vue',
          './Navigation.vue': './src/components/navigation/Navigation.vue',
          './MainTemplate.vue': './src/components/template/MainTemplate.vue',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
