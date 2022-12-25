const mongoose = require("mongoose");
const { toJSON, paginate } = require('./plugins');
const starterPackSchema = mongoose.Schema({
    pack_name: {
        required: true,
        type: String
    },
    pack_items: [[
        {
            required: true,
            type: String
        },
        // {
        //   required:true,
        //   type:String
        // }
    ],
    ],
    price: {
        required: true,
        type: String
    },
    images: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
starterPackSchema.plugin(toJSON);
starterPackSchema.plugin(paginate);
module.exports = mongoose.model('StarterPack', starterPackSchema);