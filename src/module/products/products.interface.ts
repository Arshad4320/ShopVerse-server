import { ObjectId } from "mongoose";

export interface IProduct {
  name: string;
  details: string;
  price: number;
  quantity: number;
  image?: string;
  categoryId: ObjectId;
}
