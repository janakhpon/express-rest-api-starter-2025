import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import pino from "pino";
import { ENV } from "./config";
import storiesRouter from "./routes/stories";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });

export const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
// windowMs: 10 * 60 * 1000 sets the window to 10 minutes (10 minutes × 60 seconds × 1000 ms).
// max: allows 100 requests per window per IP.
app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }));
app.use("/api/stories", storiesRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok", env: ENV });
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    logger.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  },
);
