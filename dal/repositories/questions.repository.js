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
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}
}
module.exports = QuestionsRepository
