const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  idProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 0,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  local: {
    type: String,
    require: true,
  },
  numberPhone:{
    type:Number,
    require:true,
    default:""
  },
  price:{
    type:Number,
    require:true,
    default:0
  },
  createAt: {
    type: Date,
    default: Date.now // Không có dấu ngoặc đơn ở đây
}
});


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;