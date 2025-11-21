import express from "express";
import { CategoryController } from "./category.controller";
import { upload } from "../../middleware/uploade";
const router = express.Router();

router.post(
  "/category-create",
  upload.single("image"),
  CategoryController.createCategory
);
router.get("/category", CategoryController.getCategory);
router.get("/category/:id", CategoryController.getSingleCategory);
router.patch(
  "/category-update/:id",
  upload.single("image"),
  CategoryController.updateCategory
);
router.delete("/category-delete/:id", CategoryController.deleteCategory);

export const categoryRoute = router;
