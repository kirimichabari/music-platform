const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../users/user.model");

// REGISTER
exports.register = async (data) => {
    const { username, email, password, role } = data;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        role
    });

    return {
        message: "User registered successfully"
    };
};

// LOGIN
exports.login = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            user_id: user.user_id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    return {
        message: "Login successful",
        token
    };
};