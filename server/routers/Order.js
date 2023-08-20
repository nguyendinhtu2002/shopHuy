const express = require("express");
const { createOrder, getAllOrder, getOrderById, updateOrder, deleteOrder } = require("../controllers/OrderController");
const router = express.Router();

router.post("/",createOrder );
router.get("/getAll", getAllOrder);
router.get("/getById/:id",getOrderById);
router.put("/update/:id",updateOrder)
router.delete("/detele/:id",deleteOrder)
module.exports = router;