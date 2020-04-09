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
			tableName: 'questions',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	questions.associate = function (models) {
		/*
		 * Una pregunta tiene muchas respuestas (1:M)
		 */
		models.questions.hasMany(models.answers, {
			foreignKey: 'id_questions',
			sourceKey: 'id',
			as: 'answers',
			onDelete: 'cascade'
		})
	}
	return questions
}
