const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isSeller: user.isSeller,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
