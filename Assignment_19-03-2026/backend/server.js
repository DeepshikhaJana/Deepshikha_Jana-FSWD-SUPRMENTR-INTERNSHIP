// Main entry point for the Express backend server
import express from "express";
import productRoutes from "./src/routes/productRoutes.js";
import logger from "./src/middleware/logger.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Built-in middleware for parsing JSON bodies
app.use(logger); // Custom logging middleware

// API Routes
app.use("/api/products", productRoutes);

// Root endpoint for testing the server
app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
