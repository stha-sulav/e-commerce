import express, { Application } from "express";
import http from "http";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Application = express();

//middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello wrold!");
});

//server
export const server = http.createServer(app);
