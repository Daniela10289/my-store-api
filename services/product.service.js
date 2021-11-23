const faker = require('faker');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for(let index = 0; index < limit; index ++) {
          // cada que se haga una iteración se agrega un producto al array
          this.products.push({
            id: faker.datatype.uuid(),// uuid string que va actuar de forma randomica
            name: faker.commerce.productName(), // nombres aleatorios
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
          });
        }
    }
    
    create() {

    }

    find() {
        return this.products;
    }

    findOne(id) {
        return this.products.find(item => item.id === id);
    }

    update() {

    }

    delete() {

    }

}

module.exports = ProductsService;