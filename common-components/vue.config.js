// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

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
  assetsDir: isLocalEnv ? 'resource/' : '../resources/',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
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
          './Navigation.vue': './src/components/navigation/Navigation.vue',
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
