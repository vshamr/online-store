require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/error-handling');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json()); //чтобы мы согли парсить жсон
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`listening port ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
}

start()

