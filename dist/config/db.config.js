"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./index"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(index_1.default.database_url, {
            serverSelectionTimeoutMS: 20000,
        });
        console.log("✅ Database Connected Successfully");
    }
    catch (err) {
        console.error("❌ Failed to connect MongoDB:", err);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.config.js.map