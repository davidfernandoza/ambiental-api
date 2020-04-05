'use strict'
const Repository = require('./repository')
// const { Op } = require('sequelize')
const { morphism } = require('morphism')

class QuestionsRepository extends Repository {
	constructor({ DB, QuestionDto }) {
		super(DB, QuestionDto, 'questions')
	}

	async getAll() {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll({
				include: [
					{
						model: this.db.answers,
						as: 'answers'
					}
				]
			})
			if (entities.length == 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			await super.errorHandle(error)
		}
	}

	async get(id) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				where: { id },
				include: [
					{
						model: this.db.answers,
						as: 'answers'
					}
				]
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			await super.errorHandle(error)
		}
	}
}
module.exports = QuestionsRepository
