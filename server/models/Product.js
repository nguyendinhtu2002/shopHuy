const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    require: true,
  },
  rate: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now // Không có dấu ngoặc đơn ở đây
}
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;