import { ProductSchema } from "./product.model";
import { IProduct } from "./products.interface";
const createProduct = async (payload: IProduct) => {
  try {
    const result = await ProductSchema.create(payload);
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getProducts = async () => {
  try {
    const result = await ProductSchema.find().populate("categoryId");
    return result;
  } catch (err) {
    console.log(err);
  }
};
const getSingleProduct = async (id: string) => {
  try {
    const result = await ProductSchema.findById(id).populate("categoryId");
    return result;
  } catch (err) {
    console.log(err);
  }
};
const updateProduct = async (id: string, payload: IProduct) => {
  try {
    const result = await ProductSchema.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async (id: string) => {
  try {
    const result = await ProductSchema.findByIdAndDelete(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const ProductServices = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
