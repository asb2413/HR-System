const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    emp_id: {
      type: String,
      required: true,
    },

    hr_id: {
      type: String,
      required: true,
    },

    baseSalary: {
      type: Number,
    },

    allowances: {
      type: Number,
    },

    overtime: {
      type: Number,
    },

    reward: {
      type: Number,
    },

    Else: {
      type: Number,
    },

    total: {
      type: Number,
      required: true,
    },

    //date from-to
    date: {
      type: String,
      required: true,
    },

    note: {
      type: String,
    },
  },
  { timestamps: true }
);

payrollSchema.statics.payroll = async function (
  emp_id,
  hr_id,
  baseSalary,
  allowances,
  overtime,
  reward,
  Else,
  total,
  date,
  note
) {
  if (!total || !date) {
    throw Error("filed must be fill");
  }

  const empPayroll = await this.create({
    emp_id,
    hr_id,
    baseSalary,
    allowances,
    overtime,
    reward,
    Else,
    total,
    date,
    note,
  });

  return empPayroll;
};

module.exports = mongoose.model("PAYROLL", payrollSchema);
