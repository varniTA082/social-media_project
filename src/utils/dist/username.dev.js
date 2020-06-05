"use strict";

var ADJECTIVES = ['boundless', 'plausible', 'sleepy', 'electronic', 'dangerous', 'slim', 'purple'];
var OBJECTS = ['puddle', 'piano', 'window', 'bowl', 'socks', 'brocolli', 'chalk'];

function genRandomUsername() {
  var adj = ADJECTIVES[Math.floor(Math.random() * 7)];
  var obj = OBJECTS[Math.floor(Math.random() * 7)];
  return "".concat(adj, "-").concat(obj);
}

module.exports = {
  genRandomUsername: genRandomUsername
};
console.log(genRandomUsername());
console.log(genRandomUsername());