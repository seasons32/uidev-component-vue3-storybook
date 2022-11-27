const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-postcss"
  ],
  "framework": "@storybook/vue3",

  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@uidev': path.resolve(__dirname, "../../src/"),
      '@uidev-styles': path.resolve(__dirname, "../../src/styles/"),
      '@components': path.resolve(__dirname, "../../src/components/"),
      '@grid': path.resolve(__dirname, "../../src/grid/"),
      '@storybook': path.resolve(__dirname, "../node_modules/@storybook/"),
    };

    // Return the altered config
    return config;
  },
}