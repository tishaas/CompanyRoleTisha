const express= require('express');
const RoleController = require('../controllers/RoleController');
const router = express.Router();

router.post('/addrole',RoleController.addrole);
router.get('/getall',RoleController.getALlrole);
router.get('/:id',RoleController.getRoleById);
router.delete('/:id',RoleController.deleteRole);
router.put('/:id',RoleController.updateRole);

module.exports = router;