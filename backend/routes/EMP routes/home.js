const express = require("express");
const EmphomeRouter = express.Router();
const requireAuth = require("../../middleware/requireAuth");
const {home} = require("../../controllers/EMP controllers/homeController")
const {
    payRollApi,
    attendanceApi,
    requestApi,
    empInfoApi,
    addRequest
} = require("../../controllers/EMP controllers/empApiController")
EmphomeRouter.use(requireAuth)

EmphomeRouter.post("/", home);
EmphomeRouter.post("/empdetails/empInfoApi",empInfoApi)
EmphomeRouter.post("/empdetails/payroll",payRollApi)
EmphomeRouter.post("/empdetails/attendance",attendanceApi)
EmphomeRouter.post("/empdetails/requests",requestApi)
EmphomeRouter.post("/empdetails/requests/add",addRequest)


module.exports= EmphomeRouter;