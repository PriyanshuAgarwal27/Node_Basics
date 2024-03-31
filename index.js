const express = require("express");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middleware/");
const userRouter = require("./routes/user");
// const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/example-mongodb-conn").then(() => {
  console.log("MongoDB  connected!");
});

//middleware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Server Started!");
});
