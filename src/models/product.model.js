const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        max: 128
    },
    description:{
        type: String,
        trim: true,
        required: true,
        max: 2048
    },
    category:{
        type: String,
        trim: true,
        required: true,
        max: 64
    },
    image:{
        type: String,
        trim: true,
        required: true,
        max: 2048
    },

},{ collection: "products" ,timestamps: true });

module.exports = mongoose.model("Product", productSchema);