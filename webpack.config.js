const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: 'src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'core-ui',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/styles.scss', to: 'styles.scss' },
        { from: 'src/themes', to: 'themes' },
      ],
    }),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
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
              sourceMap: true,
              additionalData: `
                @import "@src/styles.scss";
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
                outDir: './dist',
              },
            },
          },
        ],
      },
    ],
  },
}
