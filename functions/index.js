const functions = require('firebase-functions')
const app = require('express')()

const FBAuth = require('./util/fbAuth')

const { getAllPosts, createPost } = require('./handlers/posts')
const { signup, login, uploadImage } = require('./handlers/users')

// Post Routes
app.get('/posts', getAllPosts)
app.post('/posts', FBAuth, createPost)

// User Routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', uploadImage)

exports.api = functions.https.onRequest(app)
