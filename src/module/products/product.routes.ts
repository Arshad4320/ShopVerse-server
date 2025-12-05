import express from "express";
import { ProductController } from "./product.controller";
import { upload } from "../../middleware/uploade";

const router = express.Router();

router.post(
  "/product-create",
  upload.array("image", 10),
  ProductController.createProduct
);

router.get("/products", ProductController.getProducts);

router.get("/products/query", ProductController.getProductsQuery);

router.get("/product/:id", ProductController.getSingleProduct);

router.patch(
  "/product-update/:id",
  upload.array("image", 5),
  ProductController.updateProduct
);

router.delete("/product-delete/:id", ProductController.deleteProduct);

export const productRouter = router;
