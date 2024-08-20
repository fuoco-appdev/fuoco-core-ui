import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@themes': path.resolve(__dirname, '../src/themes'),
        // ...
      }
    }

    if (config.module) {
      config.module.rules?.push({
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
              `,
            },
          },
        ],
        include: path.resolve(__dirname, '../src/themes'),
      })
    }
    return config
  },
}
export default config
