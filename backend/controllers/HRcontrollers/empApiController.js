//models
const EMP_USER = require("../../models/empUserModel");
const PAYROLL = require("../../models/payRollModel");
const ATTENDANCE = require("../../models/attendanceModel");
const REQUEST = require("../../models/requestModel.");

const getAllEmp = async (req, res) => {
  try {
    const user_infos = await EMP_USER.find().select({ password: 0 });

    res.status(200).json(user_infos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const empSearchApi = async (req, res) => {
  const { data } = req.body;

  if (data) {
    try {
      const user_infos = await EMP_USER.findOne({ ...data });
      const Info = { ...user_infos };
      delete Info._doc.password;

      res.status(200).json(Info._doc);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const addPayRoll = async (req, res) => {
  const { data } = req.body;

  if (data) {
    try {
      const payroll = await PAYROLL.payroll(
        data.emp_id,
        data.hr_id,
        data.baseSalary,
        data.allowances,
        data.overtime,
        data.reward,
        data.Else,
        data.total,
        data.date,
        data.note
      );

      res.status(200).json("data added to employee payroll");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const deletePayroll = async (req, res) => {
  const { data } = req.body;

  if (data) {
    try {
      await PAYROLL.findByIdAndDelete(data);
      res.status(200).json("deleted");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const payRollApi = async (req, res) => {
  const { emp_id } = req.body;

  if (emp_id) {
    try {
      const payroll = await PAYROLL.find({ emp_id });
      res.status(200).json(payroll);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const addAttendance = async (req, res) => {
  const { data } = req.body;

  if (data) {
    try {
      const attendance = await ATTENDANCE.attendance(
        data.emp_id,
        data.hr_id,
        data.day,
        data.date,
        data.time,
        data.overtime,
        data.note
      );
      res.status(200).json("data added to employee attendance");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const deleteAttendance = async (req, res) => {
  const { data } = req.body;

  if (data) {
    try {
      await ATTENDANCE.findByIdAndDelete(data);
      res.status(200).json("deleted");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const attendanceApi = async (req, res) => {
  const { emp_id } = req.body;

  if (emp_id) {
    try {
      const attendance = await ATTENDANCE.find({ emp_id });
      res.status(200).json(attendance);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const requestApi = async (req, res) => {};

module.exports = {
  empSearchApi,
  getAllEmp,
  payRollApi,
  addPayRoll,
  deletePayroll,
  attendanceApi,
  addAttendance,
  deleteAttendance,
  requestApi,
};
