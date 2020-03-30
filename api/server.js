'use strict'
const express = require('express')

class Server {
	/*
	 * Se le pasa las configuraciones de entorno y las rutas por DI
	 * Monta el servidor con el metodo start.
	 */
	constructor({ config, routes }) {
		this._config = config
		this._express = express()
		this._express.use(routes)
	}

	start() {
		return new Promise((resolve, reject) => {
			try {
				const http = this._express.listen(this._config.PORT, () => {
					const { port } = http.address()
					resolve(port)
				})
			} catch (error) {
				reject(error)
			}
		})
	}
}

module.exports = Server
