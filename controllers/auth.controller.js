const AuthService = require('../services/auth.service');

exports.register = async (req, res) => {
  const {
    email,
    password,
    fullName,
    username,
    country,
    avatar
  } = req.body;

  const result = await AuthService.register(email, password, fullName, username, country, avatar);
  res.status(result.status).json(result.data);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.login(email, password);
  res.status(result.status).json(result.data);
};
