const HR_USER = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_PASSWORD, { expiresIn: "30d" });
};

//signup controller
const signup = async (req, res) => {
  
  //taking post data from body
  const {
    username,
    password,
    email,
    phone,
    identity,
    age,
    gender,
    nationality,
    job,
    name,
  } = req.body;

  try {
    const user = await HR_USER.signup(
      username,
      password,
      email,
      phone,
      identity,
      age,
      gender,
      nationality,
      job,
      name
    );

    res.status(200).json({message:'done'});
  } catch (error) {
    res.json({ error: error.message });
  }
};

//login controller
const login = async (req, res) => {
  //taking post data from body
  
  const { username, password } = req.body;

  try {
    const user = await HR_USER.login(username, password);
    const token = createToken(user._id);
    const Username = user.username;
    const id = user._id;
    res.status(200).json({ id, Username, token, msg: "Logedin" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
