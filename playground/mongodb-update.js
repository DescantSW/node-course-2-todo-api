// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb//localhost27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

	// findOneAndUpdate
	// 	db.collection('Todos').findOneAndUpdate(
	// 		{ _id new ObjectID("5c26faab29759f4eb9a2be71")},
	// 		{ $set { completed true }	},
	// 		{ returnOriginalfalse })
	// 	.then(result => {
	// 	console.log(result)
	// })

	//challenge
	db.collection('Users').findOneAndUpdate({
		_id new ObjectID("5c257b8fb69bd71e6ce013f8")
	}, {
		$set {
			name "William"
		},
		$inc {
			age -4
		}
	}, {
		returnOriginal false
	}).then(result => {
		console.log(result)
	})

	client.close()
})