const userRepository = require("../repositories/user.repository");
const { createUser } = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = () => {
    return userRepository.getAllUsers();
};

const getUserById = (id) => {
    return userRepository.getUserById(id);
};

const registerUser = async ({ nombre, email, password, rol }) => {

    const existingUser = userRepository.getUserByEmail(email);

    if (existingUser) {
        throw new Error("El correo ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = createUser({
        id: Date.now(),
        nombre,
        email,
        password: hashedPassword,
        rol
    });

    return userRepository.createUser(user);
};

const loginUser = async (email, password) => {

    const user = userRepository.getUserByEmail(email);

    if (!user) {
        throw new Error("Credenciales incorrectas");
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        throw new Error("Credenciales incorrectas");
    }

   const token = jwt.sign(
    {
        id: user.id,
        email: user.email,
        rol: user.rol
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "2h"
    }
);

const { password: _, ...userWithoutPassword } = user;

return {
    user: userWithoutPassword,
    token
};
};
module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser
};