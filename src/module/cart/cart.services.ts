import { ICart } from "./cart.interface";
import { Cart } from "./cart.model";

const createAddToCart = async (payload: ICart) => {
  try {
    const cart = await Cart.findOne({ user: payload.user });
    const item = payload.item[0]!;
    if (!cart) {
      const newCart = await Cart.create({
        user: payload.user,
        item: [item],
      });
      return newCart;
    }
    const existingCart = cart.item.find(
      (i) => i.product.toString() === item.product.toString()
    );
    if (existingCart) {
      existingCart.price += item.price;
      existingCart.quantity += item.quantity;
    } else {
      cart.item.push(item);
    }
    await cart.save();
    return cart;
  } catch (err) {
    console.log(err);
  }
};
const getCartByUser = async (userId: string) => {
  try {
    const result = await Cart.findOne({ user: userId }).populate(
      "item.product"
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};

const updateCart = async (
  userId: string,
  productId: string,
  quantity: number
) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("cart is not found");
    const item = cart.item.find((i) => i.product.toString() === productId);
    if (!item) throw new Error("product not found in cart");
    item.quantity = quantity;
    await cart.save();
    return cart;
  } catch (err) {
    console.log(err);
  }
};
const removeCartItem = async (userId: string, productId: string) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) throw new Error("Cart not found");

    cart.item = cart.item.filter((i) => i.product.toString() !== productId);
    await cart.save();
    return cart;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const CartService = {
  createAddToCart,
  getCartByUser,
  updateCart,
  removeCartItem,
};
