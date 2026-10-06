const users = [];

const getAllUsers = () => {
     return users.map(({ password, ...user }) => user);
};

const getUserById = (id) => {
    const user = users.find(user => user.id === Number(id));

    if (!user) {
        return null;
    }

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
};

const getUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

const createUser = (user) => {
    users.push(user);
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser
};