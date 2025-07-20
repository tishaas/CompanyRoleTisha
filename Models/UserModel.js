const DataTypes = require('sequelize');
const con = require('../config/db');
//const indexModel = require('./indexModel'); // Assuming indexModel is defined in index.js
//const { table } = require('console');

const user= con.define('user',{
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },    
    contactNumber: { type: DataTypes.STRING ,allowNull: false},
    postcode: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    hobbies: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING }
},{
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
})


module.exports = user;