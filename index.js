const express =require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

//con esto podemos recibir información de tipo post que nos envian por json
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port' + port);
});
