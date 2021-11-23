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
    if(id === '999') {
      res.status(404).json({
        message: 'not found'
      });
    }else {
      res.status(200).json({
        id,
        name: 'product 2',
        price: 2000
      });
    }
  });

  router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
      message: 'created',
      data:body
    });
  });

  // patch recibe los objetos de forma parcial
  // solo se envia el argumento que deseo modificar
  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
      message: "update", 
      data: body,
      id,
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      message: "delete",
      id,
    });
  });

  module.exports = router;