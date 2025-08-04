    const express = require('express');
    const cors = require('cors');
    require('dotenv').config();
    const helmet = require('helmet');

    const connectDB = require('./config/db');
    const adminRoutes = require('./routes/admin.routes');
    const secureRoutes = require('./routes/secure.routes');
    const authRoutes = require('./routes/auth.routes');
    const meRoutes = require('./routes/me.routes');
    const errorHandler = require('./middleware/errorHandler');


    connectDB();

    const app = express();
    app.use(cors());
    app.use(express.json());
    
    app.use('/auth', authRoutes);
    app.use(adminRoutes);
    app.use(secureRoutes);
    app.use(meRoutes);
    app.use(errorHandler);
    app.use(helmet());
    
    console.log('Auth routes loaded...');
    app.get('/', (req, res) => {
    res.send('Bridge Casino Server Running 🎲');
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    });
