import { ObjectId } from "mongoose";

export interface IOrder {
  user?: ObjectId | null;
  item: {
    product: ObjectId;
    quantity: number;
    price: number;
    images: string;
    sizes: string;
  }[];
  address: {
    name: string;
    phone: string;
    upozila: string;
    zila: string;
  };

  paymentMethod: "COD" | "Bkash" | "Nagad" | "Card";
  paymentStatus: "Pending" | "Cancel" | "Success" | "Failed";
}
