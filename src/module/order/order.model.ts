import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    item: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
    address: {
      name: { type: String },
      phone: { type: String },
      upozilla: { type: String },
      zilla: {
        type: String,
      },
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Bkash", "Nagad", "Card"],
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Cancel", "Success", "Failed"],
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model("Order", OrderSchema);
