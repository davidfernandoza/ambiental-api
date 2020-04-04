'use strict'
const { join } = require('path')

module.exports = {
	ErrorString: require(join(__dirname, './error.string')),
	DoneString: require(join(__dirname, './done.string'))
}
