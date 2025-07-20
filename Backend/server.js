import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

// Enable CORS for frontend
app.use(
  cors({
    origin: "https://kapnos-web-app.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
