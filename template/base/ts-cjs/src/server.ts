const app = require('./app')
const dotenv = require("dotenv");

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;

app.get("/", (req: any, res: any) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Server-Kit",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});