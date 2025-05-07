require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database.');

        await sequelize.sync({ alter: true });
        console.log('Database tables synchronized.');

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1);
    }
};

startServer();
