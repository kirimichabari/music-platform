const PlayHistory = require("./playhistory.model");

// CREATE
exports.createPlayHistory = async (req, res) => {
  try {
    const data = await PlayHistory.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getAllPlayHistory = async (req, res) => {
  try {
    const data = await PlayHistory.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY USER
exports.getUserPlayHistory = async (req, res) => {
  try {
    const data = await PlayHistory.findAll({
      where: { user_id: req.params.userId }
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deletePlayHistory = async (req, res) => {
  try {
    await PlayHistory.destroy({
      where: { id: req.params.id }
    });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};