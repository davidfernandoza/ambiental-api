'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const bcrypt = require('bcrypt')
const { DoneString } = require(join(__dirname, '../strings'))

class Controller {
	constructor(EntityDomain, EntityDto, Config) {
		this.entityDomain = EntityDomain
		this.entityDto = EntityDto
		this.DoneString = DoneString
		if (Config) {
			this.config = Config
		}
	}

	async getAttributes(attribut, match) {
		let entity = await this.entityDomain.getAttributes(attribut, match)
		return entity
	}

	async getAll(req, res) {
		let entities = await this.entityDomain.getAll()
		await this.response(res, entities, 'DON200L')
	}

	async get(req, res) {
		const { id } = req.params
		let entity = await this.entityDomain.get(id)
		await this.response(res, entity, 'DON200')
	}

	async create(req, res) {
		const { body } = req
		let created = await this.entityDomain.create(body)
		await this.response(res, created, 'DON201')
	}

	async update(req, res) {
		const { body } = req
		const { id } = req.params
		const updated = await this.entityDomain.update(id, body, null)
		await this.response(res, updated, 'DON204')
	}

	async password(req, res) {
		let { password } = req.body
		const id = req.idUser
		const round = parseInt(this.config.SALT_CRYPT)
		const salt = await bcrypt.genSalt(round)
		password = await bcrypt.hash(password, salt)
		const updated = await this.entityDomain.password(id, { password })
		await this.response(res, updated, 'DON204')
	}

	async delete(req, res) {
		const { id } = req.params
		const deleted = await this.entityDomain.delete(id)
		await this.response(res, deleted, 'DON204')
	}

	// Funcion que dependiendo del codigo de respuesta muestra el mensaje apropiado
	async response(res, entity, code) {
		if (!entity) {
			this.DoneString.DON404.payload = entity
			return res
				.status(this.DoneString.DON404.status)
				.send(this.DoneString.DON404)
		}
		if (code == 'DON200' || code == 'DON201' || code == 'DON200L') {
			const dto =
				code == 'DON201'
					? await this.entityDto.api('POST')
					: await this.entityDto.api()
			if (code == 'DON200L') {
				entity = entity.map(item => morphism(dto, item))
				code = 'DON200'
			} else {
				entity = morphism(dto, entity)
			}
		}
		this.DoneString[code].payload = entity
		return res.status(this.DoneString[code].status).send(this.DoneString[code])
	}
}

module.exports = Controller
