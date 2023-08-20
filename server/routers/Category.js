const express = require("express");
const {
  createCategory,
  getAllCategory,
  getById,
  deleteCategory,
  updateCategory,
} = require("../controllers/CategoryController");
const router = express.Router();

router.post("/", createCategory);
router.get("/getAll", getAllCategory);
router.get("/getById/:id", getById);
router.put("/update/:id", updateCategory);
router.delete("/detele/:id", deleteCategory);
module.exports = router;
