const Order = require("../models/Order");
const Joi = require("joi");

const createOrder = async (req, res, next) => {
  try {
    const schema = Joi.object({
      idProduct: Joi.string().required(),
      idUser: Joi.string().required(),
      quantity: Joi.number().required().min(0),
      local: Joi.string().required(),
      numberPhone: Joi.number().required(),
      price: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("idUser", "nameUser");
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;

    const schema = Joi.object({
      idProduct: Joi.string(),
      idUser: Joi.string(),
      quantity: Joi.number().min(0),
      local: Joi.string(),
      numberPhone: Joi.number(),
      price: Joi.number(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
      new: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.status(200).json(updatedOrder);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;

    const deletedOrder = await Order.findByIdAndRemove(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getAllOrder,
  updateOrder,
  deleteOrder,
};