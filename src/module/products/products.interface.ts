import { ObjectId } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: string;
  categoryId: ObjectId;
}
