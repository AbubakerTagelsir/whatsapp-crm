const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./Role");
db.user = require("./User");
db.Customer = require('./Customer');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
