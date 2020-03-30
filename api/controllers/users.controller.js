'use strict'
const mapper = require('automapper-js')
const { UserDto } = require('../dto')

class UsersController {
	constructor({ UsersRepository }) {
		this._usersRepository = UsersRepository
	}

	async getUsers(req, res) {
		let users = await this._usersRepository.getAll()
		users = users.map(user => mapper(UserDto, user))
		return res.status(200).send({ payload: users })
	}

	async getUser(req, res) {
		const { id } = req.params
		let user = await this._usersRepository.get(id)
		user = mapper(UserDto, user)
		return res.status(200).send({ payload: user })
	}

	async createUser(req, res) {
		const { body } = req
		let createdUser = await this._usersRepository.create(body)
		// console.log(createdUser)

		createdUser = mapper(UserDto, createdUser)
		return res.status(201).send({ payload: createdUser })
	}

	async updateUser(req, res) {
		const { body } = req
		const { id } = req.params
		await this._usersRepository.update(id, body)
		return res.status(204).send()
	}

	async deleteUser(req, res) {
		const { id } = req.params
		await this._usersRepository.delete(id)
		return res.status(204).send()
	}
}

module.exports = UsersController
