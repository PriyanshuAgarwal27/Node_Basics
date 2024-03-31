const express = require("express");
const router = express.Router();
const {
  handleAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/handleUsers");

router.route("/").get(handleAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUsersById)
  .put(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
