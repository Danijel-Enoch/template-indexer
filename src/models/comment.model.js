const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
    },
    // Add more fields here
  },
  {
    timestamps: true,
  }
);

CommentSchema.plugin(toJSON);
CommentSchema.plugin(paginate);

module.exports = mongoose.model('Comment', CommentSchema);
