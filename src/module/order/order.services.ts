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
const getOrdersQuery = async (query: any) => {
  try {
    const { limit = 9, search = "", page = 1 } = query;
    const filter: any = {};
    if (search) {
      filter.$or = [
        { "address.name": { $regex: search, $options: "i" } },
        { "address.phone": { $regex: search, $options: "i" } },
      ];
    }
    const skip = Number(page - 1) * Number(limit);
    const total = await Order.countDocuments(filter);
    const result = await Order.find(filter)
      .skip(skip)
      .limit(Number(limit))
      .populate("item.product")
      .sort({ createdAt: -1 });
    return {
      result,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPage: Math.ceil(total / Number(limit)),
      },
    };
  } catch (err) {
    console.log(err);
  }
};
const getAllOrderFromIntoDb = async () => {
  try {
    const result = await Order.find()
      .populate("user")
      .populate("item.product")
      .sort({ createdAt: -1 });
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
  getOrdersQuery,
  getAllOrderFromIntoDb,
  updateOrder,
  deleteOrder,
};
