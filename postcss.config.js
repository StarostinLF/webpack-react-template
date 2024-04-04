const autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano')

module.exports = {
	plugins: [autoprefixer, cssnano({ preset: 'default' })],
}
