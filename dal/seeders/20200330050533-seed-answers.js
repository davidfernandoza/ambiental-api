'use strict'

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert('answers', [
			// 1) a)
			{
				id_questions: 1,
				description: 'El 56% del plástico es de un solo uso.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 1) b)
			{
				id_questions: 1,
				description: 'El 96% del plástico es de un solo uso.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 1) c)
			{
				id_questions: 1,
				description: 'El 50 % del plástico es de un solo uso.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 1) d)
			{
				id_questions: 1,
				description: 'El 20% del plástico es de un solo uso.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 2) a)
			{
				id_questions: 2,
				description:
					'Ecoflow empresa de calzado elaborados por tubos de PVC, botas pantaneros, etc.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 2) b)
			{
				id_questions: 2,
				description: 'Adidas empresa de calzado elaborados por cartón.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 2) c)
			{
				id_questions: 2,
				description: 'Puma empresa de calzado elaborados por plástico.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 2) d)
			{
				id_questions: 2,
				description: 'Reebook empresa de calzado elaborados por tubos de pvc.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 3) a)
			{
				id_questions: 3,
				description: 'Reutilizar, reciclar y reducir.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 3) b)
			{
				id_questions: 3,
				description: 'Rotar, reunir y recoger.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 3) c)
			{
				id_questions: 3,
				description: 'Recoger, reutilizar y robar.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 3) d)
			{
				id_questions: 3,
				description: 'Reciclar ,rotar y reutilizar.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 4) a)
			{
				id_questions: 4,
				description:
					'Explosivo, Comburente, Corrosivo, Fácilmente inflamable, Extremadamente inflamable, Nocivo, Irritante, Tóxico, Extremadamente tóxico, Peligroso al medio ambiente.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 4) b)
			{
				id_questions: 4,
				description: 'Ninguna.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 4) c)
			{
				id_questions: 4,
				description: 'Peligroso, zona de evacuación, punto de encuentro.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 4) d)
			{
				id_questions: 4,
				description: 'Explosivo,peligroso para el medio ambiente.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 5) a)
			{
				id_questions: 5,
				description: 'La norma WHT35.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 5) b)
			{
				id_questions: 5,
				description: 'La norma GTC24.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 5) c)
			{
				id_questions: 5,
				description: 'La norma XYZ525.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 5) d)
			{
				id_questions: 5,
				description: 'La norma ERT89.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 6) a)
			{
				id_questions: 6,
				description: 'Invierno.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 6) b)
			{
				id_questions: 6,
				description: 'Efecto invernadero.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 6) c)
			{
				id_questions: 6,
				description: 'Tsunami.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 6) d)
			{
				id_questions: 6,
				description: 'Terremoto.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 7) a)
			{
				id_questions: 7,
				description: 'Reciclables, no reciclable, sucios, dañados.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 7) b)
			{
				id_questions: 7,
				description: 'Cartón, plástico, bombillos, televisores.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 7) c)
			{
				id_questions: 7,
				description:
					'Orgánicos, inorgánicos reciclables, inorgánicos no reciclables, manejo especial.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 7) d)
			{
				id_questions: 7,
				description: 'Reciclar ,rotar y reutilizar.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 8) a)
			{
				id_questions: 8,
				description: 'Caneca amarilla, caneca azul, caneca morada.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 8) b)
			{
				id_questions: 8,
				description: 'Caneca morada, caneca naranja, caneca roja.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 8) c)
			{
				id_questions: 8,
				description: 'Caneca gris, caneca roja, caneca rosada.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 8) d)
			{
				id_questions: 8,
				description: 'Caneca Azul, caneca roja, caneca gris, caneca verde.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 9) a)
			{
				id_questions: 9,
				description:
					'Es el espacio en el cual se desarrollan armónicamente los seres vivos.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 9) b)
			{
				id_questions: 9,
				description: 'Es un sistema donde los seres vivos viven aisladamente.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 9) c)
			{
				id_questions: 9,
				description: 'Es el sistema en el cual las plantas necesitan del agua.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 9) d)
			{
				id_questions: 9,
				description: 'Es un todo formada por agua, luz y calor.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},
			// -------------------------------------------------------------------------
			// 10) a)
			{
				id_questions: 10,
				description: 'Flora.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 10) b)
			{
				id_questions: 10,
				description: 'Fauna.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 10) c)
			{
				id_questions: 10,
				description: 'Agua.',
				is_correct: true,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			},

			// 10) d)
			{
				id_questions: 10,
				description: 'Aire.',
				is_correct: false,
				created_at: new Date().toDateString(),
				updated_at: new Date().toDateString()
			}
		])
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('answers', null, {})
	}
}
