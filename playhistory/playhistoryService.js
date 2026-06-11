const PlayHistory = require("./playhistory.model");

// CREATE
const createPlayHistory = async (data) => {
    return await PlayHistory.create(data);
};

// GET ALL
const getAllPlayHistory = async () => {
    return await PlayHistory.findAll();
};

// GET BY USER
const getUserPlayHistory = async (userId) => {
    return await PlayHistory.findAll({
        where: { user_id: userId }
    });
};

// DELETE
const deletePlayHistory = async (id) => {
    return await PlayHistory.destroy({
        where: { play_id: id }
    });
};

module.exports = {
    createPlayHistory,
    getAllPlayHistory,
    getUserPlayHistory,
    deletePlayHistory
};