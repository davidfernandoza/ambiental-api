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
		this.codeError = 'ERR400'
	}

	async getAll() {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll()
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async get(id) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({ where: { id } })
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async getAttributes(attribut, match) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				where: { [attribut]: match }
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async create(entity) {
		try {
			const dto = await this.entityDto.repository()
			entity = morphism(dto, entity)
			const created = await this.db[this.entity].create(entity)
			return morphism(dto, created)
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async update(id, entity) {
		try {
			const dto = await this.entityDto.repository()
			entity.id = id
			entity = morphism(dto, entity)
			delete entity.created_at
			delete entity.updated_at
			const result = await this.db[this.entity].update(entity, {
				where: { id }
			})
			if (result[0] == 0) return null
			return result[0]
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async delete(id) {
		try {
			const result = await this.db[this.entity].destroy({ where: { id } })
			if (result == 0) return null
			return result
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}
}
module.exports = Repository
