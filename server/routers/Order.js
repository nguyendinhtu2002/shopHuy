const express = require("express");
const { createOrder, getAllOrder, getOrderById, updateOrder, deleteOrder } = require("../controllers/OrderController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");

router.post("/",protect,createOrder );
router.get("/getAll",protect,admin, getAllOrder);
router.get("/getById/:id",protect,getOrderById);
router.put("/update/:id",protect,admin,updateOrder)
router.delete("/detele/:id",protect,admin,deleteOrder)
module.exports = router;