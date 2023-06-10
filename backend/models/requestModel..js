const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    Emp_id: {
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
      default:'pending'
    },

  },
  { timestamps: true }
);

requestSchema.statics.request = async function (
  Emp_id,
  hr_id,
  type,
  details,
  reqStatus,
) {
  if (!type || !details) {
    throw Error("fileds must be fill");
  }

  const empRequest = await this.create({
    Emp_id,
    hr_id,
    type,
    details,
    reqStatus,
  });

  return empRequest;
};

module.exports = mongoose.model("REQUEST", requestSchema);
