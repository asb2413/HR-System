const EMP_USER = require("../../models/empUserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_PASSWORD, { expiresIn: "30d" });
};




const login = async (req, res) => {
    //taking post data from body
    const { username, password } = req.body;
  
    try {
      const user = await EMP_USER.login(username, password);
      const token = createToken(user._id);
      const Username = user.username;
      const id = user._id;
      res.status(200).json({ id, Username, token, msg: "Logedin" });
    } catch (error) {
      res.json({ error: error.message });
    }
  };


  module.exports = {
    login
  };