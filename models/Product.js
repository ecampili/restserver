const { model, Schema } = require('mongoose');

const ProductSchema = new SChema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Product', ProductSchema);
