const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "roles"
        }
      ]
  });

module.exports = mongoose.model('users', UserSchema);
