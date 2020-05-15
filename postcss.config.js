const autoprefixer = require('autoprefixer')
const postcssInputRange = require('postcss-input-range')
const postcssNested = require('postcss-nested')
const postcssImport = require('postcss-import')
const postcssNormalize = require('postcss-normalize')

const config = () => ({
  plugins: [
    autoprefixer(),
    postcssNested(),
    postcssImport(postcssNormalize().postcssImport()),
    postcssInputRange(),
  ],
})
module.exports = config
