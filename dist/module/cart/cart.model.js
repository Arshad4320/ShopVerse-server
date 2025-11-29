"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    item: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
        },
    ],
}, {
    timestamps: true,
});
exports.Cart = (0, mongoose_1.model)("Cart", CartSchema);
//# sourceMappingURL=cart.model.js.map