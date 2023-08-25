const express = require("express");
const { createPayment, getAllPayment, getPaymentById, updatePayment, deletePayment, getPaymentByUser } = require("../controllers/PaymentController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");

router.post("/",protect,createPayment );
router.get("/getAll",protect,admin, getAllPayment);
router.get("/getById/:id",protect,admin,getPaymentById);
router.get("/get/user/:id",protect,getPaymentByUser);
router.put("/update/:id",protect,admin,updatePayment)
router.delete("/detele/:id",protect,admin,deletePayment)
module.exports = router;