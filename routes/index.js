const express = require('express');

const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/orders', orderRouter);
    router.use('/customers', customersRouter);
}

module.exports = routerApi;