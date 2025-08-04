    const errorHandler = (err, req, res, next) => {
    console.error('🔥 Error:', err.stack || err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
    };

    module.exports = errorHandler;
