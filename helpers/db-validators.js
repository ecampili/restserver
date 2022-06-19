const Role = require('../models/Role');
const User = require('../models/User');

const isValidRole = async (role = '') => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error('No es un role valido');
  }
};

const isMailRegistered = async (email = '') => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error('el email ya esta registrado');
  }
};

const existsUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('el usuario no existe');
  }
};

module.exports = {
  isValidRole,
  isMailRegistered,
  existsUserById,
};
