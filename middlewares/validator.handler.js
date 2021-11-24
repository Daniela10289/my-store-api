const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];         
        const {error} = schema.validate(data);
        if (error) {
            next(boom.badRequest(error));
        }
        next(); // en caso de que no halla error sigue
    }// middleware de forma dinamica
}

module.exports = validatorHandler;