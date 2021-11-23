const productRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {
    app.use('/products', productRouter);
    // app.use('/users', usersRouter);
    // app.use('/categories', categoriesRouter);
}

module.exports = routerApi;