const { model, Schema } = require('mongoose');

const RoleSchema = new Schema({
  role: {
    type: String,
    require: [true, 'The role is required'],
  },
});

module.exports = model('Role', RoleSchema);
