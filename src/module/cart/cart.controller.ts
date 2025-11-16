import { Request, Response } from "express";
import { CartService } from "./cart.services";

const createAddToCart = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await CartService.createAddToCart(payload);
    res.json({
      success: true,
      message: "product cart created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getCartProductById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId!;
    const result = await CartService.getCartByUser(userId);
    res.json({
      success: true,
      message: "cart data retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateCartByProduct = async (req: Request, res: Response) => {
  try {
    const { productId, userId, quantity } = req.body;
    const result = await CartService.updateCart(userId, productId, quantity);
    res.json({
      success: true,
      message: "cart product update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const removeItemFromCart = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body;
    const result = await CartService.removeCartItem(userId, productId);
    res.json({
      success: true,
      message: "data remove successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const CartController = {
  createAddToCart,
  getCartProductById,
  removeItemFromCart,
  updateCartByProduct,
};
