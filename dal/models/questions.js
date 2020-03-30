'use strict'
module.exports = (sequelize, DataTypes) => {
	const questions = sequelize.define(
		'questions',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			description: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: true,
			paranoid: true,
			tableName: 'questions',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
		}
	)
	questions.associate = function(models) {
		/*
		 * Muchas preguntas son jugadas por muchos jugadores
		 */
		models.questions.belongsToMany(models.players, {
			constraints: false,
			through: models.games,
			foreignKey: 'id_questions',
			sourceKey: 'id',
			as: 'players'
		})

		/*
		 * Una pregunta tiene muchas respuestas (1:M)
		 */
		models.questions.hasMany(models.answers, {
			foreignKey: 'id_questions',
			sourceKey: 'id',
			as: 'answers'
		})
	}
	return questions
}
