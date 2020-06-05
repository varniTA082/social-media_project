"use strict";

var Sequelize = require('sequelize');

var db = new Sequelize({
  dialect: 'mysql',
  database: 'cbsocialmediadb',
  username: 'cbsocialuser',
  password: 'cbsocialpass'
});
var COL_ID_DEF = {
  type: Sequelize.DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
};
var COL_USERNAME_DEF = {
  type: Sequelize.DataTypes.STRING(30),
  unique: true,
  allowNull: false
};
var COL_TITLE_DEF = {
  type: Sequelize.DataTypes.STRING(140),
  allowNull: false
};
var Users = db.define('user', {
  id: COL_ID_DEF,
  username: COL_USERNAME_DEF
});
var Posts = db.define('post', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false
  }
});
var Comments = db.define('comment', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT('tiny')
  }
});
Users.hasMany(Posts);
Posts.belongsTo(Users);
Users.hasMany(Comments);
Comments.belongsTo(Users);
Posts.hasMany(Comments);
Comments.belongsTo(Posts);
module.exports = {
  db: db,
  Users: Users,
  Posts: Posts,
  Comments: Comments
};