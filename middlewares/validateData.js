const { validationResult } = require('express-validator');

const validateData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }
  next();
};

module.exports = {
  validateData,
};
