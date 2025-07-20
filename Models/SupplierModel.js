const DataTypes = require('sequlize')
const con = require('../config/db');

const Supplier= con.define('supplier',{
    name: { type: DataTypes.STRING, allowNull: false },
    phonenumber : { type: DataTypes.STRING, allowNull: false }

},{
    tableName: 'suppliers',
    timestamps: true,
    createdAt: 'created_at',
})

module.exports = Supplier;