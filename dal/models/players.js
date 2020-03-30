'use strict'
module.exports = (sequelize, DataTypes) => {
	const players = sequelize.define(
		'players',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			username: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING
			},
			score: {
				allowNull: false,
				defaultValue: 0,
				type: DataTypes.INTEGER
			}
		},
		{
			timestamps: true,
			paranoid: true,
			tableName: 'players',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
		}
	)
	players.associate = function(models) {
		/*
		 * Muchos jugadores juegan con muchas preguntas
		 */
		models.players.belongsToMany(models.questions, {
			constraints: false,
			through: models.games,
			foreignKey: 'id_players',
			sourceKey: 'id',
			as: 'questions'
		})
	}
	return players
}
