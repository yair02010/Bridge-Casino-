    const express = require('express');
    const router = express.Router();
    const auth = require('../middleware/authMiddleware');
    const verifyUserStatus = require('../middleware/verifyUserStatus');

    router.get('/secure-zone', auth, verifyUserStatus, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}, access granted.` });
    });

    module.exports = router;
