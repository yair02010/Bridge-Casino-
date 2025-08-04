    const verifyUserStatus = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.user.status === 'banned') {
        return res.status(403).json({ message: 'Account banned. Contact support.' });
    }

    if (req.user.status === 'suspended') {
        return res.status(403).json({ message: 'Account suspended temporarily.' });
    }

    if (!req.user.isVerified) {
        return res.status(403).json({ message: 'Account not verified. Please verify identity.' });
    }

    next();
    };

    module.exports = verifyUserStatus;
