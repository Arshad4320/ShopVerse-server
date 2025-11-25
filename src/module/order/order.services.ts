import { User } from "../user/user.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (userId: string, payload: IOrder) => {
  try {
    const user = await User.findById(userId);

    if (!user) throw new Error("user not found");
    const useAddress = user.address || payload.address;

    const itemsWithTotal = payload.item.map((i) => ({
      ...i,
      total: i.quantity * i.price,
    }));
    const grandTotal = itemsWithTotal.reduce((sum, i) => sum + i.total, 0);
    const orderData = {
      user: userId,
      item: itemsWithTotal,
      address: useAddress,
      paymentMethod: payload.paymentMethod,
      paymentStatus: payload.paymentStatus,
      totalPrice: grandTotal,
    };

    const result = await Order.create(orderData);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getOrderByUser = async (userId: string) => {
  try {
    const result = await Order.find({ user: userId }).populate("item.product");
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getAllOrderFromIntoDb = async () => {
  try {
    const result = await Order.find().populate("user").populate("item.product");
    return result;
  } catch (err) {
    console.log(err);
  }
};
const updateOrder = async (orderId: string, payload: IOrder) => {
  try {
    const result = await Order.findByIdAndUpdate(orderId, payload, {
      new: true,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
const deleteOrder = async (orderId: string) => {
  try {
    const result = await Order.findByIdAndDelete(orderId);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const OrderServices = {
  createOrder,
  getOrderByUser,
  getAllOrderFromIntoDb,
  updateOrder,
  deleteOrder,
};
