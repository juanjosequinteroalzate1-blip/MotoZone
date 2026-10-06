const Product = require("../models/product.model");

const products = [];

const productRepository = {
    findAll() {
        return products;
    },

    findById(id) {
        return products.find(product => product.id === Number(id));
    },

    create(data) {
        const product = new Product(data);
        products.push(product);
        return product;
    },

    update(id, data) {
        const index = products.findIndex(
            product => product.id === Number(id)
        );

        if (index === -1) {
            return null;
        }

        products[index] = new Product({
            ...products[index],
            ...data,
            id: Number(id)
        });

        return products[index];
    },

    delete(id) {
        const index = products.findIndex(
            product => product.id === Number(id)
        );

        if (index === -1) {
            return false;
        }

        products.splice(index, 1);
        return true;
    }
};

module.exports = productRepository;