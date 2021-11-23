const express =require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for(let index = 0; index < limit; index ++) {
      // cada que se haga una iteración se agrega un producto al array
      products.push({
        name: faker.commerce.productName(), // nombres aleatorios
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
    res.json(products);
  });
  
  router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  }); // enpoints de forma especifica deben ir artes que los de forma dimanica
  
  //capturar el parametro de id que viene por url
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      id,
      name: 'product 2',
      price: 2000
    });
  });

  router.post('/', (req, res) => {
    const body = req.body;
    res.json({
      message: 'created',
      data:body
    });
  });

  module.exports = router;