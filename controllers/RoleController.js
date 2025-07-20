const Role = require("../Models/RoleModel");

module.exports = {
    addrole: async (req, res) => {
        try {
            const role = await Role.create({ name: req.body.name });
            res.status(200).json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getALlrole: async (req, res) => {
        try {
            const roles = await Role.findAll();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getRoleById: async (req, res) => {
        try {
            const role = await Role.findByPk(req.query.id);
            if (!role) {
                return res.status(404).json({ message: "Role not found" });
            }
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteRole: async (req, res) => {
        try {
            const role = await Role.findByPk(req.query.id);
            if (!role) {
                return res.status(404).json({ message: "Role not found" });
            }
            await role.destroy();
            res.status(200).json({ message: "Role deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateRole: async (req, res) => {
        try {
            const role = await Role.findByPk(req.query.id);
            if (!role) return res.status(404).json({ error: 'Role not found' });
            await role.update({ name: req.body.name });
            res.status(200).json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


}