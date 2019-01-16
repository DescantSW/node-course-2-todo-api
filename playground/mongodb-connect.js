// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb//localhost27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server')
	}

	console.log('Connected to MongoDB server')
	// const db = client.db('TodoApp')

	// db.collection('Todos').insertOne({
	// 	text 'Something to do',
	// 	completed false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to instert Todo')
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// })

	// db.collection('Users').insertOne({
	// 	text 'Bill',
	// 	age 67,
	// 	location 'Ulster Park'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to instert User')
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp())
	// })

	client.close()
})