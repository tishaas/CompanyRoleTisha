const DataTypes = require('sequelize');
const con = require('../config/db');
//const { table } = require('console');

const role= con.define('role',{
    name: { type: DataTypes.STRING, allowNull: false },

},{
    tableName: 'roles',
    timestamps: true,
    createdAt: 'created_at',
})

 role.associate = (models) => {
    role.belongsToMany(models.User, { through: 'UserRoles' });
};
module.exports = role;