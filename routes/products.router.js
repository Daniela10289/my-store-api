const express =require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
  });
  
  router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  }); // enpoints de forma especifica deben ir artes que los de forma dimanica
  
  //capturar el parametro de id que viene por url
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
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