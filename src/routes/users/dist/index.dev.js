"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../../controllers/users'),
    createAnonUser = _require2.createAnonUser,
    getUserById = _require2.getUserById,
    getUserByUsername = _require2.getUserByUsername;

var route = Router();
route.get('/:id', function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.params.id);

          if (!isNaN(parseInt(req.params.id))) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(getUserByUsername(req.params.id));

        case 4:
          user = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(getUserById(req.params.id));

        case 9:
          user = _context.sent;

        case 10:
          console.log(user);

          if (user) {
            res.status(200).send(user);
          } else {
            res.status(404).send({
              error: 'No such user id or username'
            });
          }

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
route.post('/', function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(createAnonUser());

        case 2:
          user = _context2.sent;
          res.status(201).send(user);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = {
  usersRoute: route
};