const rescue = require('express-rescue');

const { LoginService } = require('../service');

const generateToken = rescue(async (req, res) => {
  const { email } = req.body;

  const token = await LoginService.generateToken(email);

  return res.status(200).json({ token });
});

const isUserAdmin = rescue(async (req, res) => {
  const { email } = req.body;

  const [role] = await LoginService.isUserAdmin(email);

  return res
    .status(200)
    .json(role);
});

module.exports = {
  generateToken,
  isUserAdmin,
};