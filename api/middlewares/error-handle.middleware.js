'use strict'
const { join } = require('path')
const { ErrorString } = require(join(__dirname, '../strings'))

module.exports = (error, req, res, next) => {
	const errorObject = {}
	const validator = error.message.split(':')
	let code = 'ERR500'
	if (error.message.length === 6) {
		code = error.message
	} else if (validator[0] == 'ERR400') {
		code = validator[0]
	}

	if (ErrorString[code] == undefined) {
		code = 'ERR500'
	}

	errorObject.status = ErrorString[code].status
	errorObject.name = ErrorString[code].name
	errorObject.message = ErrorString[code].message
	errorObject.code = ErrorString[code].code

	if (validator[0] == 'ERR400') {
		validator.splice(0, 1)
		errorObject.detail = validator
	}

	res.status(errorObject.status)
	res.json(errorObject)
	next(error.message)
}
