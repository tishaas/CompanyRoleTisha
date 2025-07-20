const customer = require("../Models/CustomerModel");

module.exports = {
    addCustomer: async (req, res) => {
        try {
            const { name, email, contactNumber, address } = req.body;
            const customer = await customer.create({
                name,
                email,
                contactNumber,
                address
            });
            res.status(200).json(customer);
            console.log("Customer added successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getCustomer: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const { count, rows: customers } = await customer.findAndCountAll({
                limit,
                offset
            });

            const totalPages = Math.ceil(count / limit);

            res.status(200).json({
                totalItems: count,
                totalPages,
                currentPage: page,
                customers
            });
            console.log("Customers retrieved successfully");    
           
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getCustomerById: async (req, res) => {
        try {
            const customer = await customer.findByPk(req.query.id);
            if (!customer) {
                return res.status(404).json({ message: "Customer not found" });
            }
            res.json(customer);
            console.log("Customer retrieved successfully"); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteCustomer: async (req, res) => {
        try {
            const customer = await customer.findByPk(req.query.id);
            if (!customer) {
                return res.status(404).json({ message: "Customer not found" });
            }
            await customer.destroy();
            res.status(200).json({ message: "Customer deleted successfully" });
            console.log("Customer deleted successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateCustomer: async (req, res) => {
        try {
            const customer = await customer.findByPk(req.query.id);
            if (!customer) return res.status(404).json({ error: 'Customer not found' });

            const { name, email, contactNumber, address } = req.body;
            await customer.update({ name, email, contactNumber, address });
            res.status(200).json(customer);
            console.log("Customer updated successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },



}