import { ObjectId } from "mongoose";

export interface IOrder {
  user?: ObjectId;
  item: {
    product: ObjectId;
    quantity: number;
    price: number;
  }[];
  name: string;
  phone: string;
  upozilla: string;
  zilla: string;

  paymentMethod: "COD" | "Bkash" | "Nagad" | "Card";
  paymentStatus: "Pending" | "Cancel" | "Success" | "Failed";
}
