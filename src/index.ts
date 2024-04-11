import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config({
  path: process.env.DEV_MODE ? ".env.dev" : ".env.prod",
});

const app: Express = express();
const port = process.env.PORT;

if (port === undefined) {
  throw new Error(".env file not configured. PORT is undefiend.");
}

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
