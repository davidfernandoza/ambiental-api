module.exports = {
	PORT: process.env.PORT,
	ORIGIN: process.env.ORIGIN,
	BASE_API: process.env.BASE_API,
	TOKEN_KEY: process.env.TOKEN_KEY,
	SALT_CRYPT: process.env.SALT_CRYPT,
	CSRF: process.env.CSRF,
	DB: {
		username: process.env.USER,
		password: process.env.PASS,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: process.env.DIAL,
		loggin: false
	}
}
