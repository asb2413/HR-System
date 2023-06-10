const express = require("express");
const homeRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const requireAuth = require("../../middleware/requireAuth");
//controllers

const { home } = require("../../controllers/HRcontrollers/homeController");
const { addEmp } = require("../../controllers/HRcontrollers/empUserController");
const {
  empUploads,
} = require("../../controllers/HRcontrollers/empUploadsController");
const {
  myProfile,
} = require("../../controllers/HRcontrollers/myProfileController");
const {
  empSearchApi,
  getAllEmp,
  addPayRoll,
  deletePayroll,
  payRollApi,
  addAttendance,
  attendanceApi,
  deleteAttendance,
  requestApi,
  updateRequest
} = require("../../controllers/HRcontrollers/empApiController");

//middleware
homeRouter.use(requireAuth);
//home page
homeRouter.post("/", home);
//add new emp
homeRouter.post("/addEmp", addEmp);
//emp uploads (photo,contract)
homeRouter.post("/addEmpUploads", upload.any(), empUploads);
//HR profile get info api
homeRouter.post("/myProfile", myProfile);
//employee api for all infos
homeRouter.post("/employee", getAllEmp);
//search api
homeRouter.post("/employee/search", empSearchApi);
//payroll api
homeRouter.post("/employee/payroll/add", addPayRoll);
homeRouter.post("/employee/payroll/show", payRollApi);
homeRouter.delete("/employee/payroll/delete", deletePayroll);
//attendance api
homeRouter.post("/employee/attendance/add", addAttendance);
homeRouter.post("/employee/attendance/show", attendanceApi);
homeRouter.delete("/employee/attendance/delete", deleteAttendance);
//requests api
homeRouter.post("/employee/request/show", requestApi);
homeRouter.patch("/employee/request/update", updateRequest);

module.exports = homeRouter;
