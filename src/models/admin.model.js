const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');

const adminSchema = mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

})
adminSchema.plugin(toJSON);
adminSchema.plugin(paginate);

module.exports = mongoose.model('Admins', adminSchema)