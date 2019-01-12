var env = process.env.NODE_ENV || 'development'

// Heroku set env to production console.count(label);
// pacage.json script 'test' sets env to 'test'
// server.js sets env to 'development' as a default
if (env === 'development') {
	process.env.PORT = 3000
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if (env === 'test') {
	process.env.PORT = 3000
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}