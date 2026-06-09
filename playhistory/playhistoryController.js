const playHistoryService = require("./playhistoryService");

// CREATE
exports.createPlayHistory = async (req, res) => {
    try {
        const data = await playHistoryService.createPlayHistory(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getAllPlayHistory = async (req, res) => {
    try {
        const data = await playHistoryService.getAllPlayHistory();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET BY USER
exports.getUserPlayHistory = async (req, res) => {
    try {
        const data = await playHistoryService.getUserPlayHistory(req.params.userId);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE
exports.deletePlayHistory = async (req, res) => {
    try {
        const deleted = await playHistoryService.deletePlayHistory(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};