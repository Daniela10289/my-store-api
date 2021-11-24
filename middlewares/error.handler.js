function logErrors (err, req, res, next) {
    console.log('logErrors');
    console.error(err);
    next(err); // si se le envia el error es un middlewares de error 
}

// un middlewares de tipo error debe tener los 4 parametros
function errorHandler(err, req, res, next) {
    console.log('errorHandler');
    res.status(500).json({
        message: error.message,
        stack: err.stack,
        // si no tiene next terminaria el proceso
    });
}

module.exports = { logErrors, errorHandler }