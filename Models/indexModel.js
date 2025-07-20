const user = require('./UserModel');     
const role = require('./RoleModel');
const UserRole = require('./UserRoleModel');

// In UserModel.js
user.belongsToMany(role, {
  through: UserRole,          
  foreignKey: 'userId',         
  otherKey: 'role'           
});

role.belongsToMany(user, {
  through: UserRole,
  foreignKey: 'roleId',
  otherKey: 'user'
});
//user.belongsToMany(UserRole,{foreignKey:'id', targetKey: 'userId'});

// In RoleModel.js

//role.belongsToMany(UserRole, {
//   foreignKey:'id',
//   targetKey:'roleId'          

