class Product {
    constructor({
        id,
        nombre,
        descripcion,
        precio,
        categoria,
        subcategoria,
        marca,
        modeloMoto,
        stock
    }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.marca = marca;
        this.modeloMoto = modeloMoto;
        this.stock = stock;
    }
}

module.exports = Product;