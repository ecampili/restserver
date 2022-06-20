const User = require('../models/User');
const { validationResult } = require('express-validator');

const bcryptjs = require('bcryptjs');

const getAllUsers = async (req, res) => {
  const { limit = 5, offset } = req.query;
  const query = { active: true };

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(offset)).limit(Number(limit)),
  ]);

  res.status(200).json({
    total,
    users,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = User({ name, email, password, role });

  try {
    //encrypt passord
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, email, ...rest } = req.body;

  try {
    if (password) {
      const salt = bcryptjs.genSaltSync(10);
      rest.password = bcryptjs.hashSync(password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(id, rest, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // borrado fisico
    // const user = await User.findByIdAndDelete(id);
    const user = await User.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
