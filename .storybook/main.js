const babel = require('@babel/core')
const postCssLoader = './postCssLoader'
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
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ]
            }
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
