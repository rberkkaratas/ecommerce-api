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
    pronounce:  {
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
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user"
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
    },
    reset: {
        code: {
          type: String,
          default: null,
        },
        time: {
          type: String,
          default: null,
        },
      },
}, { collection: "users" ,timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
