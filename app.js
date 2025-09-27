require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const otpRoutes = require("./routes/otp");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Connect DB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/auth", otpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
