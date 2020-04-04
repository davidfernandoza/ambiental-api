'use strict'
const express = require('express')

class Server {
	/*
	 * Se le pasa las configuraciones de entorno y las rutas por DI
	 * Monta el servidor con el metodo start.
	 */
	constructor({ Config, Routes }) {
		this.config = Config
		this.express = express()
		this.express.use(Routes)
	}

	start() {
		return new Promise((resolve, reject) => {
			try {
				const http = this.express.listen(this.config.PORT, () => {
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
