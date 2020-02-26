const admin = require('firebase-admin')

const serviceAccount = require('./firebase-key.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://socialnetworkreact.firebaseio.com',
	storageBucket: 'socialnetworkreact.appspot.com'
})

const db = admin.firestore()

module.exports = { admin, db }
