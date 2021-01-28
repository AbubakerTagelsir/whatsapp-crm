const router = require('express').Router();

const authRoutes = require('./auth');
const testRoutes = require('./test');
const customerRoutes = require('./customer');

router.use('/auth', authRoutes);

router.use('/test', testRoutes);

router.use('/customer', customerRoutes);

module.exports = router;