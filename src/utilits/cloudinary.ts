import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  filename: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { public_id: `products/${Date.now()}-${filename}` },
      (error, result) => {
        if (error) reject(error);
        else resolve(result!.secure_url);
      }
    );

    stream.end(fileBuffer);
  });
};
