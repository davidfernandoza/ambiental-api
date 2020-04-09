'use strict'
const tableName = 'answers'
const constraintName = 'answers_questions_id_fkey'

module.exports = {
	up: queryInterface => {
		return queryInterface.sequelize.query(
			`alter table ${tableName}
						add constraint ${constraintName} foreign key(id_questions) references questions(id)
						on delete cascade`
		)
	},

	down: queryInterface => {
		return queryInterface.sequelize.query(
			`alter table ${tableName} drop constraint ${constraintName}`
		)
	}
}
