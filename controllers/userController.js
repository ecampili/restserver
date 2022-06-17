const getAllUsers = (req, res) => {
  const { limit, apikey } = req.query;
  res.status(200).json({ msg: 'from get', limit, apikey });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `get :${id}` });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ name, email });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `put :${id}` });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `delete :${id}` });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
