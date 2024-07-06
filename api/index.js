import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
<<<<<<< HEAD
=======
import cors from "cors";
>>>>>>> newBranch
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
<<<<<<< HEAD

const PATH = process.env.PATH || 3000;

mongoose
  .connect(process.env.MONGO)
=======
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

mongoose
  .connect(`${process.env.MONGO}`)
>>>>>>> newBranch
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

<<<<<<< HEAD
const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(PATH, () => {
  console.log(`Server is running on port ${PATH}!`);
});

=======
app.use(express.json());
app.use(cookieParser());

>>>>>>> newBranch
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
<<<<<<< HEAD
=======

app.listen(PORT, () => {
  console.log(`APP is running on port http://localhost:${PORT}`);
});
>>>>>>> newBranch
