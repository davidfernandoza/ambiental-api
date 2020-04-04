'use strict'
const { join } = require('path')
const { morphism } = require('morphism')
const { DoneString } = require(join(__dirname, '../strings'))

class Controller {
	constructor(EntityDomain, EntityDto) {
		this.entityDomain = EntityDomain
		this.entityDto = EntityDto
	}

	async getAttributes(attribut, match) {
		let entity = await this.entityDomain.getAttributes(attribut, match)
		if (!entity) throw Error('404')
		return entity
	}

	async getAll(req, res) {
		const dto = await this.entityDto.api()
		let entities = await this.entityDomain.getAll()
		entities = entities.map(item => morphism(dto, item))
		DoneString.DON200.payload = entities
		return res.status(DoneString.DON200.status).send(DoneString.DON200)
	}

	async get(req, res) {
		const dto = await this.entityDto.api()
		const { id } = req.params
		let entity = await this.entityDomain.get(id)
		if (!entity) return res.status(404).send({ payload: [] })
		entity = morphism(dto, entity)
		DoneString.DON200.payload = entity
		return res.status(DoneString.DON200.status).send(DoneString.DON200)
	}

	async create(req, res) {
		const dto = await this.entityDto.api()
		const { body } = req
		let created = await this.entityDomain.create(body)
		created = morphism(dto, created)
		DoneString.DON201.payload = created
		return res.status(DoneString.DON201.status).send(DoneString.DON201)
	}

	async update(req, res) {
		const { body } = req
		const { id } = req.params
		await this.entityDomain.update(id, body)
		return res.status(DoneString.DON204.status).send(DoneString.DON204)
	}

	async delete(req, res) {
		const { id } = req.params
		await this.entityDomain.delete(id)
		return res.status(DoneString.DON204.status).send()
	}
}

module.exports = Controller
