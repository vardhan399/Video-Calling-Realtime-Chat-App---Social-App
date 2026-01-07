import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

/* ✅ FIXED CORS */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://streamify-mocha.vercel.app", // Vercel production
      /\.vercel\.app$/, // allow all preview deployments
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/* ✅ API routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

/* ❌ REMOVED frontend serving block */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
