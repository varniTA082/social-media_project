// const route = require('express').Router()

// const {
//     fetchPosts,
//     createPosts,
//     fetchPostsById
// } = require('../../controllers/posts')

// route.get('/', async(req, res) => {
//     // Get all posts
//     const posts = await fetchPosts()
//     res.status(200).json(posts)
// })

// route.post('/', async(req, res) => {
//     // Add a new post
//     const post = await createPosts(
//         req.body.title,
//         req.body.content,
//         1 // TODO: Use actual user id from req.user.id
//     )
//     res.send(post)
// })

// route.get('/:id', async(req, res) => {
//     // Fetch a particular article
//     const postId = req.params.id
//     if (isNaN(parseInt(postId))) {
//         console.error(new Error('Post ID is incorrect!'))
//         res.redirect('/')
//     }
//     try {
//         const post = await fetchPostsById(postId)
//         res.status(200).json(post)
//     } catch (e) {
//         throw e
//     }
// })

// route.get('/:id/comments', (req, res) => {
//     // Fetch comments of a particular article
// })

// module.exports = route


const { Router } = require('express')
const {
    findAllPosts,
    createNewPost
} = require('../../controllers/posts')

const route = Router()

route.get('/', async(req, res) => {
    const posts = await findAllPosts(req.query)
    res.status(200).send(posts)
})

route.post('/', async(req, res) => {
    console.log(`POST /api/posts`, req.body)

    const { userId, title, body } = req.body

    if ((!userId) || (!title) || (!body)) {
        return res.status(400).send({
            error: 'Need userid, title and body to create post'
        })
    }

    const post = await createNewPost(userId, title, body)
    res.status(201).send(post)
})


module.exports = {
    postsRoute: route
}