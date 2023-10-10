const mongoose = require('mongoose')
const { Schema } = mongoose;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isadmin: {
        type: Number,
        required: true
    },
    userStatus: {
        type: String,
        required: true
    }

})
const User = mongoose.model('user', UserSchema);
module.exports = User;