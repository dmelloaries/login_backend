import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth/auth-routes.js"; 
import userRouter from "./routes/users/user-routes.js"; 
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5001;

// CORS configuration
const allowedOrigins = ["http://localhost:3000","https://swiggy-clone-two-mu.vercel.app"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("Server is live");
});

// Routing
app.use("/api/auth", authRouter);
app.use("/api/info", userRouter);

// Start the server
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
