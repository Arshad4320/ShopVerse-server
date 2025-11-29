import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/create-order", OrderController.createOrder);
router.get("/get-orders", OrderController.getAllOrdersFromIntoDb);
router.get("/query/get-orders", OrderController.getOrderQuery);
router.get("/get-order/:id", OrderController.getOrderByUser);
router.patch("/update-order/:id", OrderController.updateOrder);
router.delete("/delete-order/:id", OrderController.deleteOrder);

export const orderRoute = router;
