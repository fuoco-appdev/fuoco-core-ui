/* eslint-disable import/no-anonymous-default-export */
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import url from 'postcss-url'
import json from '@rollup/plugin-json'
import bundleScss from 'rollup-plugin-bundle-scss'
import autoprefixer from 'autoprefixer'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        extensions,
        // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
      }),
      commonjs({
        ignoreGlobal: false,
        include: 'node_modules/**',
      }),
      typescript(),
      bundleScss({ exclusive: false }),
      postcss({
        extract: true,
        minimize: true,
        modules: true,
        plugins: [
          url({
            url: 'inline',
            fallback: 'copy',
          }),
          autoprefixer(),
        ],
        use: [
          [
            'sass',
            {
              data: '@import "./styles.scss"; ',
              includePaths: ['./src', './node_modules'],
            },
          ],
        ],
      }),
      copy({
        targets: [
          { src: 'src/_styles.scss', dest: 'dist/cjs' },
          { src: 'src/themes/**/*', dest: 'dist/cjs/themes' },
          { src: 'src/_styles.scss', dest: 'dist/esm' },
          { src: 'src/themes/**/*', dest: 'dist/esm/themes' },
        ],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      json(),
    ],
  },
]
