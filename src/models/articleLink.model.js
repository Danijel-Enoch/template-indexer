const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');

const articleSchema = mongoose.Schema({
    link: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})
articleSchema.plugin(toJSON);
articleSchema.plugin(paginate);

module.exports = mongoose.model('Article', articleSchema)