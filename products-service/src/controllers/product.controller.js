const productService = require("../services/product.service");

const productController = {

    getAllProducts(req, res) {
        const products = productService.getAllProducts();

        res.status(200).json(products);
    },

    getProductById(req, res) {
        const product = productService.getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.status(200).json(product);
    },

    createProduct(req, res) {
        try {
            const product = productService.createProduct(req.body);

            res.status(201).json({
                mensaje: "Producto creado correctamente",
                producto: product
            });

        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    },

    updateProduct(req, res) {
        try {
            const product = productService.updateProduct(
                req.params.id,
                req.body
            );

            if (!product) {
                return res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            }

            res.status(200).json({
                mensaje: "Producto actualizado correctamente",
                producto: product
            });

        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    },

    deleteProduct(req, res) {
        const deleted = productService.deleteProduct(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Producto eliminado correctamente"
        });
    }
};

module.exports = productController;