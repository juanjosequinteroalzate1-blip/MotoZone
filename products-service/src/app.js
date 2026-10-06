const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.get("/health", (req, res) => {
    res.json({
        servicio: "Products Service",
        estado: "activo"
    });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Products Service ejecutándose en el puerto ${PORT}`);
});