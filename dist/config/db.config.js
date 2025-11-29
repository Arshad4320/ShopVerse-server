"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./index"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(index_1.default.database_url);
        console.log("✅ Database Connected");
    }
    catch (err) {
        console.log("Failed Mongodb Connect", err);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.config.js.map