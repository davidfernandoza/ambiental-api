'use strict'
const { morphism } = require('morphism')

class Dto {
	constructor(schema, dto, attribute) {
		this.schema = schema

		this.dto = dto == undefined ? null : dto
		this.attribute = attribute == undefined ? null : attribute
	}

	async api() {
		const schema = { ...this.schema }
		if (this.dto != null && this.attribute != null) {
			const dto = await this.dto.api()
			schema[this.attribute] = await this.subItems(dto, this.attribute)
		}
		return schema
	}

	async repository() {
		const schema = { ...this.schema }
		schema.created_at = 'created_at'
		schema.updated_at = 'updated_at'
		if (this.dto != null && this.attribute != null) {
			const dto = await this.dto.repository()
			schema[this.attribute] = await this.subItems(dto, this.attribute)
		}
		return schema
	}

	async subItems(dto, attribute) {
		return {
			path: attribute,
			fn: value => value.map(item => morphism(dto, item))
		}
	}

	// Procesar un campo :
	// sponsor_id: {
	// 	path: 'sponsor_id',
	// 	fn: value => value + 2
	// },
}
module.exports = Dto
