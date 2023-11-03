const express = require("express");
const {
  createCategory,
  getAllCategory,
  getById,
  deleteCategory,
  updateCategory,
} = require("../controllers/CategoryController");
const router = express.Router();
const { protect, admin } = require("../middleware/AuthMiddleware");

router.post("/", protect, admin, createCategory);
router.get("/", getAllCategory);
router.get("/getById/:id", getById);
router.put("/update/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin,  deleteCategory);
module.exports = router;
