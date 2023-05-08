const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    emp_id: {
      type: String,
      required: true,
    },

    hr_id: {
      type: String,
    },

    day: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    overtime: {
      type: String,
    },

    note: {
      type: String,
    },
  },
  { timestamps: true }
);

attendanceSchema.statics.attendance = async function (
  emp_id,
  hr_id,
  day,
  date,
  time,
  overtime,
  note
) {
  if (!day || !date || !time) {
    throw Error("fileds must be fill");
  }

  const empAttendance = await this.create({
    emp_id,
    hr_id,
    day,
    date,
    time,
    overtime,
    note,
  });

  return empAttendance;
};

module.exports = mongoose.model("ATTENDANCE", attendanceSchema);
