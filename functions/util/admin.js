const admin = require('firebase-admin')

const { key } = require('./config')

admin.initializeApp({
	credential: admin.credential.cert(key),
	databaseURL: 'https://socialnetworkreact.firebaseio.com'
})

const db = admin.firestore()

module.exports = { admin, db }
