const sequelize = require('sequelize');
require('dotenv').config();

const con = new sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
module.exports = con;