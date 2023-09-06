const express = require("express");
const { createProduct, getAllProduct, getByIdProduct, getByCategory, updateProduct, deleteProduct } = require("../controllers/ProductController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");


router.post("/",protect,admin,createProduct );
router.get("/", getAllProduct);
router.get("/getById/:id",getByIdProduct);
router.get("/get/category/:id",getByCategory);
router.put("/update/:id",protect,admin,updateProduct)
router.delete("/detele/:id",protect,admin,deleteProduct)
module.exports = router;