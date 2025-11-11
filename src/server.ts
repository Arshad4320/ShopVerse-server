import app from "./app.js";
import connectDB from "./config/db.config.js";
import config from "./config/index.js";

const startServer = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log("Shop Verse Server is Running On Port", config.port);
  });
};

startServer();
