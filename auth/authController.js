const authService = require("./authService");

// REGISTER
exports.register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};