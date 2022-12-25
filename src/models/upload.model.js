const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const UploadSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: false,
      validate(value) {
        const [, ...data] = value.split(',');
        if (!validator.isBase64(data.join(','))) {
          throw new Error('Invalid file sent');
        }
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

UploadSchema.plugin(toJSON);
UploadSchema.plugin(paginate);

module.exports = mongoose.model('Upload', UploadSchema);
