const { model, Schema } = require('mongoose');

const CategorySchema = new Schema({
  name: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Category', CategorySchema);
