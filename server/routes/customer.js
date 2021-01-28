const router = require('express').Router();
const customerControllers = require('../controllers/customer');

router.post('/', customerControllers.createCustomer);
router.get('/:customerId', customerControllers.fetchCustomer);
router.delete('/:customerId', customerControllers.deleteCustomer);
router.get('/', customerControllers.listCustomers);
router.put('/:customerId', customerControllers.updateCustomer);
router.post('/:keyword', customerControllers.searchCustomers);

module.exports = router;