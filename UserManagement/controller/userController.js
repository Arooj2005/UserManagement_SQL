const {getUserById, createUser , updateUser, deleteUser, getAllUsers } = require("../models/userModel.js");


const getUsers = (req, res) => {

    getAllUsers((err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error!"
            });
        }

        res.status(200).json({
            success: true,
            users: results
        });

    });

};


const getUser = (req, res) => {

    const id = req.params.id;

    getUserById(id, (err,results) => {
        if(err) {
            return res.status(500).json({
                success:false,
                message:"Database Error!"
            })

            
        }

        if(results.length===0) {
            return res.status(404).json({
            success: false,
            message: "User not found"
        });
        }

        res.status(200).json({
        success: true,
        user: results[0]
    });
    });

};

const addUser = (req, res) => {

    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            success: false,
            message: "Name and age are required"
        });
    }

    if (age < 0) {
        return res.status(400).json({
            success: false,
            message: "Age cannot be Negative"
        });
    }

    createUser(name, age, (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error!"
            });
        }

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                id: results.insertId,
                name: name,
                age: age
            }
        });

    });

};


const editUser = (req, res) => {

    const id = req.params.id;
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            success: false,
            message: "Name and age are required"
        });
    }

    if (age < 0) {
        return res.status(400).json({
            success: false,
            message: "Age cannot be Negative"
        });
    }

    updateUser(id, name, age, (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error!"
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully"
        });

    });

};

const removeUser = (req, res) => {

    const id = req.params.id;

    deleteUser(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error!"
            });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    });

};
module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser
};