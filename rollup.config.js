import typescript from 'rollup-plugin-typescript2'
import prettier from 'rollup-plugin-prettier'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import precss from 'precss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    // prettier({
    //   cwd: './.prettierrc',
    //   sourcemap: false,
    // }),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [precss()],
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.(tsx|ts)'],
      clean: true,
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
  ],
}
