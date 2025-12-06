import { ObjectId } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  sizes?: string[];
  brand: string;
  tags?: string;
  discount?: number;
  discountPrice?: number;
  images?: string[];
  categoryId: ObjectId;
}
