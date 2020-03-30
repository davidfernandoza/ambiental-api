'use strict'
const mapper = require('automapper-js')
const { PlayerDto } = require('../dto')

class PlayersController {
	constructor({ PlayersRepository }) {
		this._playersReposytory = PlayersRepository
	}

	async getPlayers(req, res) {
		let players = await this._playersReposytory.getAll()
		players = players.map(item => mapper(PlayerDto, item))
		return res.status(200).send({ payload: players })
	}

	async getPlayersTop(req, res) {
		let players = await this._playersReposytory.getTop()
		players = players.map(item => mapper(PlayerDto, item))
		return res.status(200).send({ payload: players })
	}

	async getPlayer(req, res) {
		const { id } = req.params
		let player = await this._playersReposytory.get(id)
		player = mapper(PlayerDto, player)
		return res.status(200).send({ payload: player })
	}

	async createPlayer(req, res) {
		const { body } = req
		let createdPlayer = await this._playersReposytory.create(body)
		createdPlayer = mapper(PlayerDto, createdPlayer)
		return res.status(201).send({ payload: createdPlayer })
	}

	async updatePlayer(req, res) {
		const { body } = req
		const { id } = req.params
		await this._playersReposytory.update(id, body)
		return res.status(204).send()
	}

	async deletePlayer(req, res) {
		const { id } = req.params
		await this._playersReposytory.delete(id)
		return res.status(204).send()
	}
}

module.exports = PlayersController
