const HR_USER = require("../../models/userModel");

const myProfile = async (req, res) => {
  console.log(req.user);

  const { id } = req.body;

  try {
    const user_infos = await HR_USER.findOne({ _id: id });
    const Info = { ...user_infos };
    delete Info._doc.password;

    res.status(200).json(Info._doc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  myProfile,
};
