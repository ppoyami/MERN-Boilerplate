const { Router } = require('express');
const router = Router();

router.use('/accounts', require('./accounts'));

module.exports = router;
