const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

const data = {
	id 10
}

const token = jwt.sign(data, '123abc')

console.log(token)

const decoded = jwt.verify(token + '1', '123abc')

console.log('decoded ', decoded)



/*
// how to encrypt using SHA256
const message = 'I am user number 3'
const hash = SHA256(message).toString()
console.log(`Message ${message}\nHash ${hash}`)

// 1. create the token  "sign"
const data = {
	id 4
}
const token = {
	data,
	hash SHA256(JSON.stringify(data) + 'somesecret').toString()
}
console.log(data)

// 2. "verify" the token
const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

if (resultHash === token.hash)
	console.log('Data was not changed')
	else
	console.log('Attention data has been changed')

*/