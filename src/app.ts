import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Shop Verse Server Is Running",
  });
});

// app.use("/api/v1", router);

export default app;
