"use strict";

var _require = require('../db/models'),
    Posts = _require.Posts,
    Users = _require.Users;

function createNewPost(userId, title, body) {
  var post;
  return regeneratorRuntime.async(function createNewPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Posts.create({
            title: title,
            body: body,
            userId: userId
          }));

        case 2:
          post = _context.sent;
          return _context.abrupt("return", post);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */


function findAllPosts(query) {
  var posts;
  return regeneratorRuntime.async(function findAllPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Posts.findAll({
            //to show authors
            include: [Users]
          }));

        case 2:
          posts = _context2.sent;
          return _context2.abrupt("return", posts);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  createNewPost: createNewPost,
  findAllPosts: findAllPosts
};
/* Test Code */
// async function task() {
//     console.log(await createNewPost(
//             1,
//             'This is a sample post',
//             'Body of the post goes here'
//         )),
//         console.log(await createNewPost(
//             2,
//             'Another sample post',
//             'Some body example here as well'
//         ))
//     const posts = await findAllPosts()
//     for (let p of posts) {
//         console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
//     }
// }
// task()