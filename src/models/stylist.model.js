const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');
const stylistSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    pictures: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    styling: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})


stylistSchema.plugin(toJSON);
stylistSchema.plugin(paginate);

module.exports = mongoose.model('Stylist', stylistSchema)