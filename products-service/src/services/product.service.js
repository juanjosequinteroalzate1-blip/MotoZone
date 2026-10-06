const productRepository = require("../repositories/product.repository");

const productService = {
    getAllProducts() {
        return productRepository.findAll();
    },

    getProductById(id) {
        return productRepository.findById(id);
    },

    createProduct(data) {
        if (!data.nombre || !data.precio || !data.categoria) {
            throw new Error("Nombre, precio y categoría son obligatorios");
        }

        if (data.precio <= 0) {
            throw new Error("El precio debe ser mayor que 0");
        }

        if (data.stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }

        return productRepository.create(data);
    },

    updateProduct(id, data) {
        const product = productRepository.findById(id);

        if (!product) {
            return null;
        }

        if (data.precio !== undefined && data.precio <= 0) {
            throw new Error("El precio debe ser mayor que 0");
        }

        if (data.stock !== undefined && data.stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }

        return productRepository.update(id, data);
    },

    deleteProduct(id) {
        return productRepository.delete(id);
    }
};

module.exports = productService;