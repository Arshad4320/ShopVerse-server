import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./router/router";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Shop Verse Server Is Running",
  });
});

app.use("/api/v1", router);

export default app;
