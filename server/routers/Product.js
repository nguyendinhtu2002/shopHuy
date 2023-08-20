const express = require("express");
const { createProduct, getAllProduct, getByIdProduct, getByCategory, updateProduct, deleteProduct } = require("../controllers/ProductController");
const router = express.Router();


router.post("/",createProduct );
router.get("/getAll", getAllProduct);
router.get("/getById/:id",getByIdProduct);
router.get("/get/category/:id",getByCategory);
router.put("/update/:id",updateProduct)
router.delete("/detele/:id",deleteProduct)
module.exports = router;