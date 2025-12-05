import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { uploadToCloudinary } from "../../utilits/cloudinary";
import { disconnect } from "process";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const files = req.files as Express.Multer.File[];

    let imageUrls: string[] = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const url = (await uploadToCloudinary(
          file.buffer,
          file.originalname
        )) as string;
        imageUrls.push(url);
      }
    }

    const price = Number(payload.price);
    const discount = Number(payload.discount);
    const quantity = Number(payload.quantity);

    payload.discountPrice =
      discount > 0 ? price - (price * discount) / 100 : null;

    const sizeArray = Array.isArray(payload.size)
      ? payload.size
      : payload.size?.split(",").map((s: string) => s.trim());

    const updatedPayload = {
      ...payload,
      price,
      quantity,
      discount,
      size: sizeArray,
      image: imageUrls,
    };

    const result = await ProductServices.createProduct(updatedPayload);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProducts();
    res.status(200).json({
      success: true,
      message: "data is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getProductsQuery = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsQuery(req.query);
    res.status(200).json({
      success: true,
      message: "data is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "product id is not found",
      });
    }
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "product is retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const payload = req.body;
    const files = req.files as Express.Multer.File[];

    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "Product ID not found",
      });
    }

    let imageUrls: string[] = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const url = (await uploadToCloudinary(
          file.buffer,
          file.originalname
        )) as string;

        imageUrls.push(url);
      }
    }

    const updatedPayload: any = {
      ...payload,
    };

    if (payload.price) updatedPayload.price = Number(payload.price);
    if (payload.quantity) updatedPayload.quantity = Number(payload.quantity);
    if (payload.discount) updatedPayload.discount = Number(payload.discount);

    if (payload.size) {
      updatedPayload.size = Array.isArray(payload.size)
        ? payload.size
        : payload.size.split(",").map((s: string) => s.trim());
    }

    if (imageUrls.length > 0) {
      updatedPayload.image = imageUrls;
    }

    const result = await ProductServices.updateProduct(
      productId,
      updatedPayload
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "product id is not found",
      });
    }
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getProductsQuery,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
