const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }//date bilgisi güncelleme tarihi
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
