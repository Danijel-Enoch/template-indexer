const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');
const postSchema = mongoose.Schema({
    author: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

})
postSchema.plugin(toJSON);
postSchema.plugin(paginate);

module.exports = mongoose.model('Posts', postSchema)