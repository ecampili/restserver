const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to Database');
  } catch (error) {
    console.log('Error in connecting to database', error);
    // throw new Error('Error in connecting to database');
  }
};

module.exports = {
  dbConnection,
};
