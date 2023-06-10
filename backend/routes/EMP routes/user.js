const express = require("express");
const empUserRouter = express.Router();

const {login} = require('../../controllers/EMP controllers/userController')


empUserRouter.post("/login",login)


module.exports = empUserRouter;