const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: 'src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'core-ui',
    libraryTarget: 'umd',
  },
  devtool:'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@themes': path.resolve(__dirname, 'src/themes'),
    },
    plugins: [
        new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })
    ],
  },
  module: {
    rules: [
      {
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
        include: path.resolve(__dirname, '.'),
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
                compilerOptions: {
                    outDir: './dist'
                }
            }
          }
        ]
      },
    ],
  },
}
