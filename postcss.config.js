const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssImport = require('postcss-import')
const postcssNormalize = require('postcss-normalize')

const config = () => ({
  plugins: [
    autoprefixer(),
    postcssNested(),
    postcssImport(postcssNormalize().postcssImport()),
  ],
})
module.exports = config
