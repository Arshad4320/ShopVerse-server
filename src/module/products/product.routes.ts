import express from "express";
import { ProductController } from "./product.controller";
import { upload } from "../../middleware/uploade";

const router = express.Router();

router.post(
  "/product-create",
  upload.single("image"),
  ProductController.createProduct
);
router.get("/products", ProductController.getProducts);
router.get("/product/:id", ProductController.getSingleProduct);
router.patch(
  "/product-update/:id",
  upload.single("image"),
  ProductController.updateProduct
);
router.delete("/product-delete/:id", ProductController.deleteProduct);

export const productRouter = router;
