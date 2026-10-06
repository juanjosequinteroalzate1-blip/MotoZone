const createUser = ({ id, nombre, email, password, rol = "cliente" }) => {
    return {
        id,
        nombre,
        email,
        password,
        rol
    };
};

module.exports = {
    createUser
};