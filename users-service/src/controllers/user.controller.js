const userService = require("../services/user.service");

const getAllUsers = async (req, res) => {
    try {
        const users = userService.getAllUsers();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los usuarios",
            error: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al buscar el usuario",
            error: error.message
        });
    }
};

const register = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({
                mensaje: "Nombre, email y contraseña son obligatorios"
            });
        }

        const user = await userService.registerUser({
            nombre,
            email,
            password,
            rol
        });

        const { password: _, ...userWithoutPassword } = user;

        res.status(201).json({
            mensaje: "Usuario registrado correctamente",
            usuario: userWithoutPassword
        });

    } catch (error) {
        res.status(400).json({
            mensaje: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                mensaje: "Email y contraseña son obligatorios"
            });
        }

        const { user, token } = await userService.loginUser(email, password);

res.status(200).json({
    mensaje: "Inicio de sesión exitoso",
    usuario: user,
    token: token
        });

    } catch (error) {
        res.status(401).json({
            mensaje: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    register,
    login
};