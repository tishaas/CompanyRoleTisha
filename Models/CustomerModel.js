const DataTypes = require('sequelize');
const con = require('../config/db');

const customer = con.define('customer', {
    name: { type: DataTypes.STRING, allowNull: false }, 
    email: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },        
    contactNumber: { type: DataTypes.STRING ,allowNull: false},
      address: { type: DataTypes.STRING },                                
}, {
    tableName: 'customers', 
    timestamps: true,
    createdAt: 'created_at',        

});

module.exports = customer;
