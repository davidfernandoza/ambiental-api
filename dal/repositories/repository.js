'use strict'
const { morphism } = require('morphism')
/*
 * Manejador de consultas a la base de datos
 */
class Repository {
	constructor(db, entityDto, entity) {
		this.db = db
		this.entity = entity
		this.entityDto = entityDto
	}

	async getAll() {
		const dto = await this.entityDto.repository()
		const entities = await this.db[this.entity].findAll()
		return entities.map(item => morphism(dto, item))
	}

	async get(id) {
		const dto = await this.entityDto.repository()
		const entity = await this.db[this.entity].findOne({ where: { id } })
		return morphism(dto, entity)
	}

	async create(entity) {
		const dto = await this.entityDto.repository()
		entity = morphism(dto, entity)
		const created = await this.db[this.entity].create(entity)
		return morphism(dto, created)
	}

	async update(id, entity) {
		const dto = await this.entityDto.repository()
		entity.id = id
		entity = morphism(dto, entity)
		delete entity.created_at
		delete entity.updated_at
		return await this.db[this.entity].update(entity, { where: { id } })
	}

	async delete(id) {
		return await this.db[this.entity].destroy({ where: { id } })
	}
}
module.exports = Repository
