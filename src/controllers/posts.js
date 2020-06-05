const { Posts, Users, Comments } = require('../models/db')

async function createPosts(title, content, authorId) {
    if (typeof title !== 'string' || title.length < 1) {
        throw new Error('Title empty or undefined')
    }
    if (typeof content !== 'string' || content.length < 1) {
        throw new Error('Content empty or undefined')
    }
    if (typeof authorId !== 'number') {
        throw new Error('Author of article not defined')
    }
    try {
        return await Posts.create({
            title,
            content,
            authorId
        })
    } catch (e) {
        throw e
    }
}

async function fetchPosts() {
    try {
        return await Posts.findAll({
            include: [
                { model: Users, as: 'author', attributes: ['username'] }
            ]
        })
    } catch (e) {
        throw (e)
    }
}

async function fetchPostsById(postId) {
    try {
        return await Posts.findById(postId, {
            include: [{
                model: Comments,
                include: [{
                    model: Users,
                    attributes: ['username']
                }]
            }]
        })
    } catch (e) {
        throw e
    }
}

module.exports = {
    createPosts,
    fetchPosts,
    fetchPostsById
}

// const { Posts, Users } = require('../db/models')

// async function createNewPost(userId, title, body) {
//     const post = await Posts.create({
//         title,
//         body,
//         userId,
//     })

//     return post
// }

// /**
//  * showAllPosts({username: ''})
//  * showAllPosts({title: ''})
//  */
// async function findAllPosts(query) {
//     let where = {}
//     if (query.userId) { where.userId = query.userId }

//     const posts = await Posts.findAll({
//         include: [Users],
//         where
//     })

//     return posts
// }

// module.exports = {
//     createNewPost,
//     findAllPosts
// }

/* Test Code */
/*
async function task() {
  // console.log(
  //   await createNewPost(
  //     1,
  //     'This is a sample post',
  //     'Body of the post goes here'
  //   )
  // ),
  // console.log(
  //   await createNewPost(
  //     2,
  //     'Another sample post',
  //     'Some body example here as well'
  //   )
  // )
  const posts = await showAllPosts()
  for (let p of posts) {
    console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
  }
}
task()
*/