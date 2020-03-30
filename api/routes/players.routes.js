'use strict'

const { Router } = require('express')

module.exports = ({ PlayersController }) => {
	/*
	 * Rutas de los jugadores:
	 */
	const controller = PlayersController
	const router = Router()
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.get('/top', controller.getTop.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
