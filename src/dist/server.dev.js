"use strict";

var express = require('express');

var _require = require('./db/models'),
    db = _require.db;

var _require2 = require('./routes/users'),
    usersRoute = _require2.usersRoute;

var _require3 = require('./routes/posts'),
    postsRoute = _require3.postsRoute;

var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/', express["static"](__dirname + '/public'));
db.sync().then(function () {
  app.listen(8383, function () {
    console.log('server started on http://localhost:8383');
  });
})["catch"](function (err) {
  console.error(new Error('Could not start database'));
  console.error(err);
});