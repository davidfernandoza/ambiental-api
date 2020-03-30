'use strict'
const { join } = require('path')
const { ErrorString } = require(join(__dirname, '../strings'))

module.exports = (error, req, res, next) => {
	const errorObject = {}
	let pasport = false
	if (error.message.length === 6) {
		const code = error.message
		if (ErrorString[code] != undefined) {
			errorObject.status = ErrorString[code].status
			errorObject.name = ErrorString[code].name
			errorObject.message = ErrorString[code].message
			errorObject.code = ErrorString[code].code
			pasport = true
		}
	}
	if (!pasport) {
		errorObject.status = ErrorString.ERR500.status
		errorObject.name = ErrorString.ERR500.name
		errorObject.message = ErrorString.ERR500.message
		errorObject.code = ErrorString.ERR500.code
	}
	res.status(errorObject.status)
	res.json(errorObject)
	next(error.message)
}
