const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  email: {
    type: String,
    require: [true, 'The email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'The password is required'],
  },
  google: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE', 'SALES_ROLE'],
  },
  img: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model('User', UserSchema);
