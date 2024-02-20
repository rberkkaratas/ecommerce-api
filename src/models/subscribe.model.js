const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        max: 128
    },

}, { collection: "subscribes", timestamps: true });

module.exports = mongoose.model("Subscribe", subscribeSchema);