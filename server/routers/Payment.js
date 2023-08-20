const express = require("express");
const { createPayment, getAllPayment, getPaymentById, updatePayment, deletePayment, getPaymentByUser } = require("../controllers/PaymentController");
const router = express.Router();

router.post("/",createPayment );
router.get("/getAll", getAllPayment);
router.get("/getById/:id",getPaymentById);
router.get("/get/user/:id",getPaymentByUser);
router.put("/update/:id",updatePayment)
router.delete("/detele/:id",deletePayment)
module.exports = router;