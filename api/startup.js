'use strict'

/*
 * Se le pasa el servido por DI y este lo ejecuta con el metodo start
 */
class StartUp {
	constructor({ server }) {
		this._server = server
	}

	async start() {
		return await this._server.start().then(data => data)
	}
}
module.exports = StartUp
