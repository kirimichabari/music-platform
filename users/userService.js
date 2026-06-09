const User = require("./user.model");

// CREATE USER
const createUser = async (data) => {
    return await User.create(data);
};

// GET ALL USERS
const getAllUsers = async () => {
    return await User.findAll();
};

// GET ONE USER
const getUserById = async (id) => {
    return await User.findByPk(id);
};

// UPDATE USER
const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update(data);
    return user;
};

// DELETE USER
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.destroy();
    return true;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};