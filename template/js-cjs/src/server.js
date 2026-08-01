const app = require("./app");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Server-Kit",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
