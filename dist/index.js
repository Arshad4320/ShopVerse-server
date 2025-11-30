"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
const db_config_1 = __importDefault(require("./config/db.config"));
// import serverless from "serverless-http";
const startServer = async () => {
    await (0, db_config_1.default)();
    app_1.default.listen(index_1.default.port, () => {
        console.log("shop verse Server is Running On Port", index_1.default.port);
    });
};
startServer();
// export default serverless(app);
//# sourceMappingURL=index.js.map