const babel = require('@babel/core')
const path = require('path');
require('storybook-addon-sketch/register-options')({ kind: true });

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    'storybook-addon-designs/register',
    'storybook-addon-sketch/register',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@themes': path.resolve(__dirname, '../src/themes'),
      // ...
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import "@themes/_colors.scss";
              @import "@themes/_global.scss";
              @import "@themes/_margins-paddings.scss";
            `
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config;
  },
  core: {
    builder: 'webpack5',
  },
}
