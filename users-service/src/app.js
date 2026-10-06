const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.get("/health", (req, res) => {
    res.json({
        servicio: "Users Service",
        estado: "activo"
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Users Service ejecutándose en el puerto ${PORT}`);
});