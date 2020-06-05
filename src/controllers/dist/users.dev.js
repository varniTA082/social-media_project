"use strict";

var _require = require('../db/models'),
    Users = _require.Users;

var _require2 = require('../utils/username'),
    genRandomUsername = _require2.genRandomUsername;

function createAnonUser() {
  var user;
  return regeneratorRuntime.async(function createAnonUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Users.create({
            username: genRandomUsername()
          }));

        case 2:
          user = _context.sent;
          return _context.abrupt("return", user);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getUserById(id) {
  return regeneratorRuntime.async(function getUserById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Users.findOne({
            where: {
              id: id
            }
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getUserByUsername(username) {
  return regeneratorRuntime.async(function getUserByUsername$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Users.findOne({
            where: {
              username: username
            }
          }));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

module.exports = {
  createAnonUser: createAnonUser,
  getUserById: getUserById,
  getUserByUsername: getUserByUsername
};
/*  Test Code */
// async function task() {
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
// }
// task()