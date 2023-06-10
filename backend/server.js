const express = require("express");
const server = express();
const cors = require('cors')
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userRouter = require("./routes/HR routes/user");
const homeRouter = require("./routes/HR routes/home");
const empUserRouter = require("./routes/EMP routes/user");
const EmphomeRouter = require("./routes/EMP routes/home");
server.use(express.json());
server.use(cors({

  origin:"*",
  credentials:true,

}))

//hr routes

server.use("/hr", userRouter);
server.use("/hr", homeRouter);
//employee routes
server.use("/emp", empUserRouter);
server.use("/emp", EmphomeRouter);


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
