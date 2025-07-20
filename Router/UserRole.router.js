const express = require('express');
const UserRoleController = require('../controllers/UserRoleController');
const router = express.Router();

router.post('/:userId/roles/:roleId', UserRoleController.attachRole);
router.delete('/:userId/roles/:roleId', UserRoleController.detachRole);

module.exports = router;