const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    emp_id: {
      type: String,
      required: true,
    },
    hr_id: {
      type: String,
      default:''
    },
    type: {
      type: String,
      required: true,
    },


    details: {
      type: String,
      required: true,
    },

    reqStatus: {
      type: String,
    },

  },
  { timestamps: true }
);

requestSchema.statics.attendance = async function (
  emp_id,
  hr_id,
  type,
  details,
  reqStatus
) {
  if (!type || !date || !details) {
    throw Error("fileds must be fill");
  }

  const empRequest = await this.create({
    emp_id,
    hr_id,
    type,
    details,
    reqStatus,
  });

  return empRequest;
};

module.exports = mongoose.model("REQUEST", requestSchema);
