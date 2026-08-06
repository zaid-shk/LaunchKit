import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT: number = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Server-Kit",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});