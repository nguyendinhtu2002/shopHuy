const express = require("express");
const { createOrder, getAllOrder, getOrderById, updateOrder, deleteOrder, getOrderByCode } = require("../controllers/OrderController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");

router.post("/",createOrder );
router.get("/getAll", getAllOrder);
router.get("/getByCode/:code", getOrderByCode)
router.get("/getById/:id",protect,getOrderById);
router.put("/update/:id",updateOrder)
router.delete("/:id",deleteOrder)
module.exports = router;