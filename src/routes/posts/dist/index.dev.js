"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../../controllers/posts'),
    findAllPosts = _require2.findAllPosts,
    createNewPost = _require2.createNewPost;

var route = Router();
route.get('/', function _callee(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(findAllPosts());

        case 2:
          posts = _context.sent;
          res.status(200).send(posts);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
route.post('/', function _callee2(req, res) {
  var _req$body, userId, title, body, post;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, userId = _req$body.userId, title = _req$body.title, body = _req$body.body;

          if (!(!userId || !title || !body)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).send({
            error: 'Need userid, title and body to create post'
          }));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(createNewPost(userId, title, body));

        case 5:
          post = _context2.sent;
          res.status(201).send(post);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = {
  postsRoute: route
};