const { ref } = require("joi");
const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["paypal", "cash"],
    require: true,
    default: "cash",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now, // Không có dấu ngoặc đơn ở đây
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  status: {
    type: String,
    enum: ["success", "error", "cancel"],
    default: "success",
  },
  money:{
    type:Number,
    require:true,
    default:0
  }
});


const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;