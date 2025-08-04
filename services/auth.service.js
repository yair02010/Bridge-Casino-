const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (email, password, fullName, username, country) => {
  try {
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return { status: 400, data: { message: 'Email or username already in use' } };
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashed,
      fullName,
      username,
      country,
      coins: 1000,
      role: 'player'
    });

    return {
      status: 201,
      data: {
        message: 'User registered',
        user: {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          country: user.country,
          role: user.role,
          coins: user.coins,
          rating: user.rating
        }
      }
    };
  } catch (err) {
    return { status: 500, data: { message: 'Server error', error: err.message } };
  }
};

exports.login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { status: 401, data: { message: 'Invalid credentials' } };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { status: 401, data: { message: 'Invalid credentials' } };
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '3d'
    });

    return {
      status: 200,
      data: {
        token,
        user: {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          country: user.country,
          role: user.role,
          coins: user.coins,
          rating: user.rating
        }
      }
    };
  } catch (err) {
    return { status: 500, data: { message: 'Server error', error: err.message } };
  }
};
