const express = require("express");
const server = express();
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userRouter = require("./routes/HR routes/user");
const homeRouter = require("./routes/HR routes/home");

server.use(express.json());
server.use("/hr", userRouter);
server.use("/hr", homeRouter);

mongoose
  .connect(process.env.dbURL)
  .then(() => {
    console.log("db is connected");
    //listen
    server.listen(process.env.PORT, () => {
      console.log("listening to prot ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
