const { Router } = require('express');
const { auth } = require('../../middleware/auth');
const ctrl = require('./accounts.ctrl');

const router = Router();

router.post('/join', ctrl.post_join);
router.post('/login', ctrl.post_login);
router.get('/logout', auth, ctrl.get_logout);
router.get('/auth', auth, ctrl.auth);

module.exports = router;
