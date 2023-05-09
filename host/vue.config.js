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

const distributionURL = process.env.VUE_APP_CF_DIST_DOMAIN_NAME;

const getRemoteEntry = (appName, port) => {
  if (process.env.NODE_ENV === 'production') {
    return `https://${distributionURL}/${appName}/remoteEntry.js`;
  }
  return `http://localhost:${port}/remoteEntry.js`;
};

module.exports = defineConfig({
  assetsDir: isLocalEnv ? 'resource/' : './resources/',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: isLocalEnv ? 'auto' : '/host',
  devServer: {
    port: 8080,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  configureWebpack: {
    ...configureWebpack,
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          commonComponents: `commonComponents@${getRemoteEntry('common-components', 8084)}`,
          appList: `appList@${getRemoteEntry('app-list', 8081)}`,
          reactAppDetail: `reactAppDetail@${getRemoteEntry('react-app-detail', 8083)}`,
          angularAppAbout: `angularAppAbout@${getRemoteEntry('angular-app-about', 4200)}`,
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
