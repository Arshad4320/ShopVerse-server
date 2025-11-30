// import app from "./app";
// import config from "./config/index";
// import connectDB from "./config/db.config";
// import serverless from "serverless-http";
// const startServer = async () => {
//   await connectDB();
//   app.listen(config.port, () => {
//     console.log("shop verse Server is Running On Port", config.port);
//   });
// };

// startServer();
// export default serverless(app);
import app from "./app";
import connectDB from "./config/db.config";
import serverless from "serverless-http";

connectDB(); // only call this once

export const handler = serverless(app);
export default handler;
