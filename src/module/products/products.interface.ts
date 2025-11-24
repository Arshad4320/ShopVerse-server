import { ObjectId } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  tags: string;
  discount?: number;
  discountPrice?: number;
  image?: string;
  categoryId: ObjectId;
}
