const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


module.exports = {
    register: async (req, res) => {
        try {
            const { firstname, lastname, email, password, contactNumber, postcode, hobbies, gender } = req.body;
            const hashedPassword = await bcrypt.hash(password, 8)
            const user = await UserModel.create({
                firstname,
                lastname,
                email,
                contactNumber,
                postcode,
                password: hashedPassword,
                hobbies,
                gender
            });

            res.status(200).json(user);
            console.log("User registered successfully");

        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },
    login: async (req, res) => {
        try {
            const user = await UserModel.findOne({ where: { email: req.body.email } })

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
                expiresIn: '1h'
            })
            res.json({ token })
            console.log("User logged in successfully");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findByPk(req.query.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
            console.log("User retrieved successfully");

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllUser: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const { count, rows: users } = await UserModel.findAndCountAll({ limit, offset });
            const totalPages = Math.ceil(count / limit);
            //const users = await UserModel.findAll();
            // res.json(users);
            // console.log("All users retrived successfully");
            res.status(200).json({
                totalItems: count,
                totalPages: totalPages,
                currentPage: page,
                users,
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}