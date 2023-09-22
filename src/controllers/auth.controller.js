const user = require("../models/user.model");

const login = async (req, res) => {
    return res.status(200).json({ message: "Login" });
}
const register = async (req, res) => {
    return res.status(200).json({ message: "Register" });
}
const me = async (req, res) => {
    return res.status(200).json({ message: "Me" });
}
const updateProfile = async (req, res) => {
    return res.status(200).json({ message: "Update Profile" });
}
const deleteUser = async (req, res) => {
    return res.status(200).json({ message: "Delete User" });
}
const getUserbyId = async (req, res) => {
    return res.status(200).json({ message: "Get User by Id" });
}
const getAllUsers = async (req, res) => {
    return res.status(200).json({ message: "Get All Users" });
}
module.exports = {
  login,
  register,
  me,
  updateProfile,
  deleteUser,
  getUserbyId,
  getAllUsers,
}