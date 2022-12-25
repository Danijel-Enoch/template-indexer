const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const ratingSchema = mongoose.Schema({
    productId: {
        required: true,
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

})

ratingSchema.plugin(toJSON);
ratingSchema.plugin(paginate);

module.exports = mongoose.model('Rating', ratingSchema)