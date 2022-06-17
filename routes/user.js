const { Router } = require('express');

const {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} = require('../controllers/userController');

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
