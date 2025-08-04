    const express = require('express');
    const router = express.Router();
    const { register, login } = require('../controllers/auth.controller');
    const validate = require('../middleware/validate');
    const { registerSchema, loginSchema } = require('../validations/auth.validation');
    const { authLimiter } = require('../middleware/rateLimiter');

    router.post('/register', authLimiter, validate(registerSchema), register);
    router.post('/login', authLimiter, validate(loginSchema), login);

    module.exports = router;
