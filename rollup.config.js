/* eslint-disable import/no-anonymous-default-export */
import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
// so JS can be rolled with TS
// remove when JS files have been removed
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'

import icons from './internals/icons'

console.log('Expected Externals', [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  './src',
])

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: {
    index: 'src/index.tsx',
    // avatar: 'src/components/Avatar/index.tsx',
    button: 'src/components/button/index.tsx',
    typography: 'src/components/typography/index.tsx',
    icon: 'src/components/icon/index.tsx',
    image: 'src/components/image/index.tsx',
    card: 'src/components/card/index.tsx',
    badge: 'src/components/badge/index.tsx',
    alert: 'src/components/alert/index.tsx',
    accordion: 'src/components/accordion/index.tsx',
    tabs: 'src/components/tabs/index.tsx',
    menu: 'src/components/menu/index.tsx',
    modal: 'src/components/modal/index.tsx',
    modal: 'src/components/popover/index.tsx',
    sidepanel: 'src/components/side-panel/index.tsx',
    dropdown: 'src/components/dropdown/index.tsx',
    contextmenu: 'src/components/context-menu/index.tsx',
    loading: 'src/components/loading/index.tsx',
    divider: 'src/components/divider/index.tsx',
    select: 'src/components/select/index.tsx',
    listbox: 'src/components/listbox/index.tsx',
    checkbox: 'src/components/checkbox/index.tsx',
    input: 'src/components/input/index.tsx',
    radio: 'src/components/radio/index.tsx',
    toggle: 'src/components/toggle/index.tsx',
    upload: 'src/components/upload/index.tsx',
    auth: 'src/components/auth/index.tsx',
    ...icons,
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    './src',
  ],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
    {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
  ],
  plugins: [
    external(),
    typescript(),
    // so JS can be rolled with TS
    // remove when JS files have been removed
    nodeResolve({
      ignoreGlobal: false,
      include: ['node_modules/**'],
      extensions,
      // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
    }),
    commonjs({
      ignoreGlobal: false,
      include: 'node_modules/**',
    }),
    postcss({
      // plugins: require('./postcss.config').plugins,
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-assets')({
          loadPaths: ['**'],
        }),
      ],
      // modules: true,
      minimize: true,
      sourceMap: false,
      // extract: false,
      modules: {
        // see generateScopedName options here
        // https://github.com/css-modules/postcss-modules
        generateScopedName: '[local]',
      },
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    del({ targets: ['dist/*'] }),
    copy({
      targets: [
        { src: 'src/assets/images/**/*', dest: 'dist/cjs/src/assets/images' },
      ],
    }),
  ],
}
