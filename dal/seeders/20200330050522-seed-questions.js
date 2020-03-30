'use strict'

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert('questions', [
			// 1)
			{
				description:
					'¿Cuál es el porcentaje de plástico de un solo uso en Colombia?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 2)
			{
				description:
					'¿Cuál empresa está haciendo calzado con productos reciclados?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 3)
			{
				description: '¿Qué es las 3 R en el medio ambiente?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 4)
			{
				description: '¿Cuáles son los pictogramas?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 5)
			{
				description:
					'¿Que norma técnica colombiana establece que para cada tipo de residuo se debe utilizar un contenedor de un color específico.?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 6)
			{
				description:
					'El fenómeno que ocasiona el calentamiento del planeta, cambios climáticos y múltiples enfermedades respiratorios se le llama:',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 7)
			{
				description: '¿Como se clasifican?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 8)
			{
				description: '¿Cuáles son los colores de las canecas de basura?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 9)
			{
				description: '¿Qué es el medio ambiente?',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 10)
			{
				description:
					'Uno de los principales recursos naturales renovables, está formado básicamente por animales y se le conoce como:',
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			}
		])
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('questions', null, {})
	}
}
