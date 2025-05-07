const express = require('express');
const router = express.Router();
const orderValidation = require('../validations/orderValidation');
const validate = require('../middlewares/validate');
const orderController = require('../controllers/orderController');

router.post('/', validate(orderValidation.create), orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', validate(orderValidation.id, 'params'), orderController.getOrderById);
router.put('/:id', validate(orderValidation.id, 'params'), validate(orderValidation.update), orderController.updateOrder);
router.delete('/:id', validate(orderValidation.id, 'params'), orderController.deleteOrder);

module.exports = router; 