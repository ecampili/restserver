const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { dbConnection } = require('./database/dbConnection');

const UserRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3001;

//define la connexio para que sea async
const connectToDb = async () => {
  await dbConnection();
};

//ejectuta para conectar
connectToDb();

app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', UserRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
