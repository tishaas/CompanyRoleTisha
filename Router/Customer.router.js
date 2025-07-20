const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const router = express.Router();

router.post('/addcustomer',CustomerController.addCustomer);
router.get('/getallcustomers', CustomerController.getCustomer);
router.get('/customer/:id', CustomerController.getCustomerById);
router.delete('/deletecustomer/:id', CustomerController.deleteCustomer);
router.put('/updatecustomer/:id', CustomerController.updateCustomer);                                   

module.exports = router;