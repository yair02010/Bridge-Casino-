    const express = require('express');
    const router = express.Router();
    const auth = require('../middleware/authMiddleware');
    const isAdmin = require('../middleware/isAdmin');

    router.get('/admin/dashboard', auth, isAdmin, (req, res) => {
    res.json({ message: `Welcome admin ${req.user.fullName}` });
    });

    module.exports = router;
