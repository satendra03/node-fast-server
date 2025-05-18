// Express app setup
const express = require('express');
const userRoutes = require('./routes/user.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const notFoundMiddleware = require('./middlewares/notFound.middleware');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
