const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // firstname, lastname, email, password, role, cart, adress, wishlist
    firstname: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    gender:  {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    passwordhash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "level0"
    },
    cart: {
        type: Array,
        default: []
    },
    adress: {
        type: String,
        default: ""
    },
    wishlist: {
        type: Array,
        default: []
    }
}, { collection: "users" ,timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
