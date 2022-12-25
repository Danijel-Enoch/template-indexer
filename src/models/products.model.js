const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    category: {
        type: String,
        required: true
    },
    description: {
        required: true,
        type: String
    },
    prize: {
        required: true,
        type: String
    },
    size: {
        required: true,
        type: Number
    },
    color: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

})

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

module.exports = mongoose.model('Product', productSchema)