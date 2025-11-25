import { Request, Response } from "express";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.body.user!;
    const payload = req.body;
    const result = await OrderServices.createOrder(userId, payload);
    res.json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getOrderByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id!;
    const result = await OrderServices.getOrderByUser(userId);
    res.json({
      success: true,
      message: "Order retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllOrdersFromIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromIntoDb();
    res.json({
      success: true,
      message: "Order retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id!;
    const payload = req.body;
    const result = await OrderServices.updateOrder(orderId, payload);
    res.json({
      success: true,
      message: "Order update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id!;
    const result = await OrderServices.deleteOrder(orderId);
    res.json({
      success: true,
      message: "order deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderController = {
  createOrder,
  getOrderByUser,
  getAllOrdersFromIntoDb,
  updateOrder,
  deleteOrder,
};
