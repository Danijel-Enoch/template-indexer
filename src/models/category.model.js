const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const categorySchema = mongoose.Schema({
    category_name: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

})

categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

module.exports = mongoose.model('Category', categorySchema)