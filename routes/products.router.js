const express =require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema, queryproductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/',
  validatorHandler(queryproductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
);
  
  // router.get('/filter', (req, res) => {
  //   res.send('Yo soy un filter');
  //   // enpoints de forma especifica deben ir artes que los de forma dimanica
  // }); 
  
  //capturar el parametro de id que viene por url
  router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async(req, res, next) => {
      try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product);  
      } catch (error) {
        next(error);
      }      
  });

  router.post('/', 
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
  });

  // patch recibe los objetos de forma parcial
  // solo se envia el argumento que deseo modificar
  router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async(req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);   
      } catch (error) {
        next(error);
      }
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  });

  module.exports = router;