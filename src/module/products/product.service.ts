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
const getProducts = async (query: {
  search?: string;
  category?: string;
  limit: number;
  page: number;
}) => {
  try {
    const { search, category, limit, page } = query;
    const filter: any = {};
    if (search) {
      filter.$or = [
        { name: { $regex: search, options: "i" } },
        { category: { $regex: search, options: "i" } },
      ];
    }
    if (category) {
      filter.categoryId = category;
    }
    const skip = (page - 1) * limit;
    const total = await ProductSchema.countDocuments(filter);
    const result = await ProductSchema.find(filter)
      .populate("categoryId")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    return {
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
      data: result,
    };
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
