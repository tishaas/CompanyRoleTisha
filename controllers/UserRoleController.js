const UserRole = require("../Models/UserRoleModel");

module.exports = {
    attachRole: async (req, res) => {
        try {
            const user = await UserRole.findByPk(req.params.userId);
            if (!user) return res.status(404).json({ error: 'User not found' });

            await user.addRole(req.params.roleId);
            res.status(200).json({ message: 'Role attached to user' })

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    detachRole: async (req, res) => {
        try {
            const user = await UserRole.findByPk(req.query.userId);
            if (!user) return res.status(404).json({ error: 'User not found' });

            await user.removeRole(req.query.roleId);
            res.status(200).json({ message: 'Role detached from user' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}