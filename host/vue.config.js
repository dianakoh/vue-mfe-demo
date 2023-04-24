// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
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
  assetsDir: isLocalEnv ? 'resource/' : '../resources/',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          commonComponents: 'commonComponents@http://localhost:8084/remoteEntry.js',
        },
        exposes: {},
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
