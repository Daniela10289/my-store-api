const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 8080;

//con esto podemos recibir información de tipo post que nos envian por json
app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true) // si no hay errores el acceso a la api esta permitido
    }else {
      callback(new Error('no permitido'));
    }
  }
}
// configuracion para habilitar y poder conectarse desde cualquier origen
// solo acepta su mismo dominio
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
