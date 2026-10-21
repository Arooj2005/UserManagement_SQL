const express = require("express");
const { getUsers, getUser, addUser, editUser, removeUser } = require("../controller/userController");

const router = express.Router();

router.get("/", getUsers); // to fetch all users form data

router.get("/:id", getUser); // to fetch only one user by id

router.post("/", addUser);

router.put("/:id", editUser); // update existing user

router.delete("/:id", removeUser);

module.exports = router;