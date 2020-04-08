module.exports = {
	PORT: process.env.PORT,
	ORIGIN: process.env.ORIGIN,
	BASE_API: process.env.BASE_API,
	TOKEN_KEY: process.env.TOKEN_KEY,
	SALT_CRYPT: process.env.SALT_CRYPT,
	CRFS: process.env.CRFS,
	DB: {
		username: process.env.USER_DEV,
		password: process.env.PASS_DEV,
		database: process.env.DB_DEV,
		host: process.env.HOST_DEV,
		dialect: process.env.DIAL_DEV,
		loggin: true
	}
}
