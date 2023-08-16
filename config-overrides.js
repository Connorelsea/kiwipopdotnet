/* config-overrides.js */

const rewireStyledComponents = require("react-app-rewire-styled-components");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const { override, addWebpackPlugin } = require("customize-cra");

module.exports = function override(config, env) {
  // ...
  config = rewireStyledComponents(config, env);
  // ...
  return config;
};

module.export = override(
  addWebpackPlugin(
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: true,
      silent: false,
      strict: true,
    })
  )
);
