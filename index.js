const { transformSync } = require('@swc/core')
const { readFileSync } = require('fs')

const file = './node_modules/fetch-blob/from.js'

const run = () => {
  const res = transformSync(readFileSync(file, 'utf-8'), {
    filename: file,
    module: {
      type: 'commonjs',
      ignoreDynamic: true,
    },
    jsc: {
      /**
       * ! loose mode enabled: not found `_classPrivateFieldLooseBase` function declare
       * ✓ loose mode disabled: no problem
       */
      loose: true,
      target: 'es2017',
    },
  })
  console.log('res.code: ', res.code)
}

run()
