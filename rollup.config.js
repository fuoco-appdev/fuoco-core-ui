/* eslint-disable import/no-anonymous-default-export */
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import url from 'postcss-url'

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
      postcss({
        modules: true,
        inject: true,
        plugins: [
          url({
            url: 'inline',
            maxSize: 10,
            fallback: 'copy',
          }),
        ],
        use: [
          [
            'sass',
            {
              includePaths: ['./src', './node_modules']
            },
          ],
        ],
      }),
      copy({
        targets: [
          { src: 'src/_styles.scss', dest: 'dist/cjs' },
          { src: 'src/themes/**/*', dest: 'dist/cjs/themes' },
        ],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
    ],
  },
]
