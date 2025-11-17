import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (userId: string, payload: IOrder) => {
  try {
    const user = await Order.findById(userId);
    if (!user) throw new Error("user not found");
    const useAddress = user.address || payload.address;
    const orderData = {
      user: payload.user,
      item: payload.item,
      address: useAddress,
      paymentMethod: payload.paymentMethod,
      paymentStatus: payload.paymentStatus,
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
