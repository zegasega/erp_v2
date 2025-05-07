const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const validate = require('../middlewares/validate');
const customerValidation = require('../validations/customerValidation');

// Tüm müşterileri getir
router.get('/', customerController.getAllCustomers);

// Aktif müşterileri getir
router.get('/active', customerController.getActiveCustomers);

// ID'ye göre müşteri getir
router.get('/:id', customerController.getCustomerById);

// Yeni müşteri oluştur
router.post('/', validate(customerValidation.create), customerController.createCustomer);

// Müşteri güncelle
router.put('/:id', validate(customerValidation.update), customerController.updateCustomer);

// Müşteri sil
router.delete('/:id', customerController.deleteCustomer);

// Müşteriyi aktif/pasif yap
router.patch('/:id/toggle-active', customerController.toggleCustomerActive);

module.exports = router; 