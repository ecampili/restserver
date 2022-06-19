const mongoose = require('mongoose');
const { dbConnection } = require('./database/dbConnection');
const { insertMany } = require('./models/Role');
const User = require('./models/User');
const Role = require('./models/Role');

const users = [
  {
    name: 'test1',
    email: 'test1@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test2',
    email: 'test2@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test3',
    email: 'test3@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test4',
    email: 'test4@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test5',
    email: 'test5@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test6',
    email: 'test6@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test7',
    email: 'test7@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test8',
    email: 'test8@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test9',
    email: 'test9@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test10',
    email: 'test10@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test11',
    email: 'test11@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test12',
    email: 'test12@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test13',
    email: 'test13@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test14',
    email: 'test14@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test15',
    email: 'test15@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test16',
    email: 'test16@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test17',
    email: 'test17@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test18',
    email: 'test18@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test19',
    email: 'test19@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
  {
    name: 'test20',
    email: 'test20@gmail.com',
    password: '123456',
    role: 'USER_ROLE',
  },
];

const roles = [
  { role: 'ADMIN_ROLE' },
  { role: 'USER_ROLE' },
  { role: 'SALES_ROLE' },
  { role: 'PEPE_ROLE' },
];

const seed = async () => {
  await dbConnection();
  await User.deleteMany({});
  console.log('all users deleted');
  await User.insertMany(users);
  console.log('all users loaded');
  await Role.deleteMany({});
  console.log('all roles deleted');
  await Role.insertMany(roles);
  console.log('all roles loaded');
};

seed();
