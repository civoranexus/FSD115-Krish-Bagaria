import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";

dotenv.config();
let port = process.env.PORT || 8000;

let app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

console.log("✅ Routes mounted at /api/user");

app.listen(port, () => {
  console.log("hello from server ");
  connectDb();
});
