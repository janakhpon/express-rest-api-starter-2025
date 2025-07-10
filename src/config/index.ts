import { config } from "dotenv";
config();

export const ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const LOG_LEVEL = process.env.LOG_LEVEL || "info";
export const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
