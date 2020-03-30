'use strict'
const { morphism } = require('morphism')

class Controller {
	constructor(EntityDomain, EntityDto) {
		this.entityDomain = EntityDomain
		this.entityDto = EntityDto
	}

	async getAll(req, res) {
		const dto = await this.entityDto.api()
		let entities = await this.entityDomain.getAll()
		entities = entities.map(item => morphism(dto, item))
		return res.status(200).send({ payload: entities })
	}

	async get(req, res) {
		const dto = await this.entityDto.api()
		const { id } = req.params
		let entity = await this.entityDomain.get(id)
		if (!entity) return res.status(404).send({ payload: [] })
		entity = morphism(dto, entity)
		return res.status(200).send({ payload: entity })
	}

	async create(req, res) {
		const dto = await this.entityDto.api()
		const { body } = req
		let created = await this.entityDomain.create(body)
		created = morphism(dto, created)
		return res.status(201).send({ payload: created })
	}

	async update(req, res) {
		const { body } = req
		const { id } = req.params
		await this.entityDomain.update(id, body)
		return res.status(204).send()
	}

	async delete(req, res) {
		const { id } = req.params
		await this.entityDomain.delete(id)
		return res.status(204).send()
	}
}

module.exports = Controller
