    const Joi = require('joi');

    const forbiddenUsernames = ['admin', 'moderator', 'bridge', 'casino'];

    const registerSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Invalid email format'
        }),

    password: Joi.string()
        .min(8)
        .max(128)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'))
        .required()
        .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 8 characters',
        'string.pattern.base': 'Password must contain uppercase, lowercase, and a number'
        }),

    fullName: Joi.string()
        .min(2)
        .max(100)
        .pattern(/^[a-zA-Zא-ת ]+$/)
        .required()
        .messages({
        'string.empty': 'Full name is required',
        'string.pattern.base': 'Full name can only contain letters and spaces'
        }),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .invalid(...forbiddenUsernames)
        .required()
        .messages({
        'string.empty': 'Username is required',
        'string.alphanum': 'Username must only contain letters and numbers',
        'any.invalid': 'This username is not allowed'
        }),

    country: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
        'string.empty': 'Country is required'
        }),

    avatar: Joi.string()
        .uri()
        .optional()
        .messages({
        'string.uri': 'Avatar must be a valid URL'
        })
    });

    const loginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Invalid email format'
        }),

    password: Joi.string()
        .required()
        .messages({
        'string.empty': 'Password is required'
        })
    });

    module.exports = {
    registerSchema,
    loginSchema
    };
