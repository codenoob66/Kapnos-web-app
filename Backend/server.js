import express from "express";
import dontenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dontenv.config();

const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
