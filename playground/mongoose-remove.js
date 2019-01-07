const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')


// remove all todos
Todo.remove({}).then(result => {
	console.log(result)
})

Todo.findByIdAndRemove('5c33cbb644cdb87d3f73810b').then(todo => {
	console.log(todo)
})

Todo.findOneAndRemove({id: '5c33cbb644cdb87d3f73810b'}).then(todo => {
	console.log(todo)
})

