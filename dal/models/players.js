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
			password: {
				allowNull: false,
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
			tableName: 'players',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	return players
}
