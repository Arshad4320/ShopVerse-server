import express from "express";
import { CategoryController } from "./category.controller";
import { upload } from "../../middleware/uploade";
const router = express.Router();

router.post(
  "/create-category",
  upload.single("images"),
  CategoryController.createCategory
);
router.get("/category", CategoryController.getCategory);
router.get("/category/:id", CategoryController.getSingleCategory);
router.patch("/category-update/:id", CategoryController.updateCategory);
router.delete("/category-delete/:id", CategoryController.deleteCategory);

export const categoryRoute = router;
