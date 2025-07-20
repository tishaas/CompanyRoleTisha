const DataTypes = require('sequelize');
const con = require('../config/db');
const User = require('./UserModel');     
const Role = require('./RoleModel');   

const UserRole = con.define('user_role',{
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
})

module.exports = UserRole;