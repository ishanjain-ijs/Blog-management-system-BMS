const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    category: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }]
  },
  {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);