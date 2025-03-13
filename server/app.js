import express from "express";
import path from "path";
import config from "config";
import cors from "cors";
import contactRouter from "./controllers/index.js";

const app = express();
const PORT = config.get("PORT") || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Support form data
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Serve static frontend files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client")));

// API Routes
app.use("/api", contactRouter);

// Root route (Serve frontend)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
