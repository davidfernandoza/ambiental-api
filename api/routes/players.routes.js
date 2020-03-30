'use strict'

const { Router } = require('express')

module.exports = ({ PlayersController }) => {
	/*
	 * Rutas de los jugadores:
	 */
	const controller = PlayersController
	const router = Router()
	router.get('/', controller.getPlayers.bind(controller))
	router.get('/top', controller.getPlayersTop.bind(controller))
	router.get('/:id', controller.getPlayer.bind(controller))
	router.post('/', controller.createPlayer.bind(controller))
	router.put('/:id', controller.updatePlayer.bind(controller))
	router.delete('/:id', controller.deletePlayer.bind(controller))

	return router
}
