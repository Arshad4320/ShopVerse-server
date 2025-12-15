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
const getProductsQuery = async (query: any) => {
  try {
    const filters: any = {};
    const { page = 1, limit = 8, search, category } = query;
    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }
    if (category) {
      filters.categoryId = category;
    }
    const skip = (Number(page) - 1) * Number(limit);
    const total = await ProductSchema.countDocuments(filters);
    const products = await ProductSchema.find(filters)
      .skip(skip)
      .limit(Number(limit))
      .populate("categoryId")
      .sort({ createdAt: -1 });
    const result = products.map((item) => {
      return {
        ...item.toObject(),
        stock: item.quantity > 0 ? "In Stock" : "Stock Out",
      };
    });
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
    const result = await ProductSchema.findByIdAndDelete(id, { new: true });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProductsQuery,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
