// const {
//   shareAll,
//   withModuleFederationPlugin,
// } = require("@angular-architects/module-federation/webpack");

// module.exports = withModuleFederationPlugin({
//   name: "angular-app-about",
//   exposes: {
//     //"./Component": "./src/app/app.component.ts",
//     "./mount": "./src/mount.ts",
//   },

//   shared: {
//     ...shareAll({
//       singleton: true,
//       strictVersion: true,
//       requiredVersion: "auto",
//     }),
//   },
// });

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "angularAppAbout",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularAppAbout",
      filename: "remoteEntry.js",
      exposes: {
        "./mount": "./src/mount.ts",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
