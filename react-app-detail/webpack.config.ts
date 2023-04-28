import { resolve } from "path";
import { Configuration, container } from "webpack";
import { dependencies } from "./package.json";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const extensions = [".js", ".jsx", ".ts", ".tsx"];

const config: Configuration = {
  entry: resolve(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrcRoots: ["."],
        },
      },
    ],
  },
  resolve: {
    extensions,
    plugins: [
      new TsconfigPathsPlugin({
        extensions,
      }),
    ],
  },
  plugins: [
    new Dotenv(),
    new container.ModuleFederationPlugin({
      name: "reactAppDetail",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./mount": "./src/mount.tsx",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
};

export default config;
