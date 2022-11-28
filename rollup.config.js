/* eslint-disable import/no-anonymous-default-export */
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import sass from 'node-sass'

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
        extensions: ['.scss'],
        extract: true,
        minimize: true,
        modules: true,
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
