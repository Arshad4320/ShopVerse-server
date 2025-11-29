"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
const db_config_1 = __importDefault(require("./config/db.config"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const startServer = async () => {
    await (0, db_config_1.default)();
    app_1.default.listen(index_1.default.port, () => {
        console.log("shop verse Server is Running On Port", index_1.default.port);
    });
};
startServer();
exports.default = (0, serverless_http_1.default)(app_1.default);
//# sourceMappingURL=index.js.map