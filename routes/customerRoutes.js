const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const validate = require('../middlewares/validate');
const customerValidation = require('../validations/customerValidation');


router.get('/', customerController.getAllCustomers);
router.get('/active', customerController.getActiveCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', validate(customerValidation.create), customerController.createCustomer);
router.put('/:id', validate(customerValidation.update), customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.patch('/:id/toggle-active', customerController.toggleCustomerActive);

module.exports = router; 