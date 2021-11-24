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
    
    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data //split operation para concatenar los valores
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 5000);
        });
    }

    async findOne(id) {
        return this.products.find(item => item.id === id);
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('product not found!');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('product not found!');
        }
        // cuantos elementos quiero eliminar apartir de la posicion del array
        this.products.splice(index, 1);
        return { id };
    }

}

module.exports = ProductsService;