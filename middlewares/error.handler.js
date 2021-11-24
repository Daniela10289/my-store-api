function logErrors (err, req, res, next) {
    console.log('logErrors');
    console.error(err);
    next(err); // si se le envia el error es un middlewares de error 
}

// un middlewares de tipo error debe tener los 4 parametros
function errorHandler(err, req, res, next) {
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        // si no tiene next terminaria el proceso
    });
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }