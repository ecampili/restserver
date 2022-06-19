const { Router } = require('express');

const { check } = require('express-validator');
const { validateData } = require('../middlewares/validateData');

const {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} = require('../controllers/userController');
const {
  isValidRole,
  isMailRegistered,
  existsUserById,
} = require('../helpers/db-validators');

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post(
  '/',
  [
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password is less than 6 characters').isLength({
      min: 6,
    }),
    check('email', 'this is no a valid email').isEmail(),
    check('email').custom(isMailRegistered),
    // check('role', 'this is no a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isValidRole),
    validateData,
  ],
  createUser
);

router.put(
  '/:id',
  [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(existsUserById),
    check('role').custom(isValidRole),
    validateData,
  ],
  updateUser
);

router.delete(
  '/:id',
  [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(existsUserById),
    validateData,
  ],
  deleteUser
);

module.exports = router;
