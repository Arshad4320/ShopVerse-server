import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    address: {
      name: { type: String },
      phone: { type: String },
      upozilla: { type: String },
      city: { type: String },
    },
    userType: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
