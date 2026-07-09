const generateToken = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (
            !username?.trim() ||
            !email?.trim() ||
            !password?.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        }

        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: "Username already taken",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
    username,
    email,
    password: hashedPassword,
});

const token = generateToken(user._id);

return res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
    user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        role: user.role,
    },
});

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    registerUser,
};