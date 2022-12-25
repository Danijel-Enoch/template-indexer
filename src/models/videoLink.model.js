const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');

const videoSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    images: {
        required: true,
        type: String
    },
    creator: {
        required: true,
        type: String
    },
    source: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})

videoSchema.plugin(toJSON);
videoSchema.plugin(paginate);


module.exports = mongoose.model('Video', videoSchema)