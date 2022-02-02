// const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongooose.Schema({
    email: {
         type: String,
        required:true,
        unique: true
    },
    roles: {
        User: {
            type: Number,
            default: 1
        },
        Admin: Number
    },
    password: {
        type: String,
        required:true
    },
    refreshToken: String
});
const User = mongooose.model('USER', userSchema);

module.exports = User;

