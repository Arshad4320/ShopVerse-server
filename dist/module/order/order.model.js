"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    item: [
        {
            product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
        },
    ],
    address: {
        name: { type: String },
        phone: { type: String },
        upozilla: { type: String },
        city: {
            type: String,
        },
    },
    paymentMethod: {
        type: String,
        enum: ["COD", "Bkash", "Nagad", "Card"],
    },
    paymentStatus: {
        type: String,
        enum: ["Pending", "Cancel", "Success", "Failed"],
    },
}, {
    timestamps: true,
});
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
//# sourceMappingURL=order.model.js.map