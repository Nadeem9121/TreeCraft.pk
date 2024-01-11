import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import orderRoutes from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productsRoutes.js";
import uploadsRoutes from "./routes/uploadsRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadsRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
