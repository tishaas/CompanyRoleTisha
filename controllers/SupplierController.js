const supplier = require("../Models/SupplierModel");

module.exports = {
    addSupplier: async (req, res) => {
        try {
            const { name, email, contactNumber, address } = req.body;
            const supplier = await supplier.create({
                name,
                email,
                contactNumber,
                address
            });
            res.status(200).json(supplier);
            console.log("Supplier added successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getSupplier: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

        const { count, rows: supplier } = await supplier.findAndCountAll({
                limit,
                offset
            });                    

            const totalPages = Math.ceil(count / limit);

            res.status(200).json({
                totalItems: count,
                totalPages,
                currentPage: page,
                supplier
            });
               
           
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getSupplierById: async (req, res) => {
        try {
            const supplier = await supplier.findByPk(req.query.id);
            if (!customer) {
                return res.status(404).json({ message: "Supplier not found" });
            }
            res.json(supplier);
            console.log("supplier retrieved successfully"); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteSupplier: async (req, res) => {
        try {
            const Supplier = await supplier.findByPk(req.query.id);
            if (!Supplier) {
                return res.status(404).json({ message: "Supplier not found" });
            }
            await Supplier.destroy();
            res.status(200).json({ message: "Supplier deleted successfully" });
            console.log("Supplier deleted successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateSupplier: async (req, res) => {
        try {
            const Supplier= await Supplier.findByPk(req.query.id);
            if (!Supplier) return res.status(404).json({ error: 'Supplier not found' });

            const { name, email, contactNumber, address } = req.body;
            await Supplier.update({ name, email, contactNumber, address });
            res.status(200).json(Supplier);
            console.log("Supplier updated successfully");                                   
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },



}