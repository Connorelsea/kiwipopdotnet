/* config-overrides.js */

const rewireStyledComponents = require("react-app-rewire-styled-components");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { override, addWebpackPlugin } = require("customize-cra");

// module.exports = function override(config, env) {
//   // ...
//   config = rewireStyledComponents(config, env);
//   // ...
//   return config;
// };

// module.export = override(
//   // addWebpackPlugin(
//     // new ImageminWebpWebpackPlugin({
//     //   config: [
//     //     {
//     //       test: /\.(jpe?g|png)/,
//     //       options: {
//     //         quality: 75,
//     //       },
//     //     },
//     //   ],
//     //   overrideExtension: true,
//     //   detailedLogs: true,
//     //   silent: false,
//     //   strict: true,
//     // })
//   // ),
//   addWebpackPlugin(new BundleAnalyzerPlugin({ generateStatsFile: true }))
// );

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    // ...add your webpack config

    config.plugins = [
      ...config.plugins,
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
      }),
      new BundleAnalyzerPlugin(),
    ];

    return config;
  },
};
