const express = require("express");
const server = express();
const cors = require('cors')
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT ;
mongoose.set("strictQuery", false);
const userRouter = require("./routes/HR routes/user");
const homeRouter = require("./routes/HR routes/home");
const empUserRouter = require("./routes/EMP routes/user");
const EmphomeRouter = require("./routes/EMP routes/home");
server.use(express.json());
const corsOptions = {
  origin: 'https://ornate-paprenjak-c573a0.netlify.app', // specify your frontend's origin
  credentials: true, // allow credentials (cookies, authorization headers, etc.)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  preflightContinue: false,
  optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Preflight requests handling
app.options('*', cors(corsOptions));
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
    server.listen(process.env.PORT , () => {
      console.log("listening to prot ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
