const router = require("express").Router();
const {
  login,
  register,
  me,
  updateProfile,
  deleteUser,
  getUserbyId,
  getAllUsers,
} = require("../controllers/auth.controller");

router.get("/me", me);

router.get("/get-user/:id", getUserbyId);

router.get("/get-users", getAllUsers);

router.post("/login",  login);

router.post("/register", register);

router.patch("/update-profile/:id", updateProfile);

router.delete("/delete-user/:id", deleteUser);

module.exports = router;