const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')
const { commentsRoute } = require("./routes/posts/comments")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(__dirname + '/public'))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('posts/comments', commentsRoute)

db.sync()
    .then(() => {
        app.listen(8383, () => {
            console.log('server started on http://localhost:8383')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })