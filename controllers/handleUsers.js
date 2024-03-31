const { userModel } = require("../models/userModels");

async function handleAllUsers(req, res) {
  res.setHeader("X-MyName", "Priyanshu"); //Custom Header
  const allDbUsers = await userModel.find({});
  if (!allDbUsers) {
    return res.status(404).json({ status: "Failed" });
  }
  return res.status(200).json(allDbUsers);
}

async function handleGetUsersById(req, res) {
  // const id = Number(req.params.id);
  // console.log(id);
  // const user = users.find((user) => user.id === id);
  // console.log(user);
  // if (!user) {
  //   return res.status(404).end("user not found");
  // }
  const requestedUser = await userModel.findById(req.params.id);
  if (!requestedUser) {
    return res.status(404).json({ error: "id not found" });
  }
  return res.status(200).json(requestedUser);
}

async function handleUpdateUserById(req, res) {
  // const body = req.body;
  // const id = Number(req.params.id);
  // const updatedUserIndex = users.findIndex((user) => user.id === id);
  // if (updatedUserIndex === -1) {
  //   return res.status(404).json({ status: "Failed" });
  // }
  // console.log(body);
  // const newData = { ...body, id: id };
  // users.splice(updatedUserIndex, 1, newData);
  // fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "Success", id });
  // });
  const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {
    first_name: "manc",
  });
  if (!updatedUser) {
    return res.status(404).json({ status: "id not found" });
  }
  return res.status(200).json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  // const id = Number(req.params.id);
  // const deleteUserIndex = users.findIndex((user) => user.id === id);
  // users.splice(deleteUserIndex, 1);
  // fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "Success", id });
  // });
  const deletedUser = await userModel.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({ status: "id not found" });
  }
  return res.status(200).json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  await userModel.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    ip_address: body.ip_address,
    job_desc: body.job_desc,
  }); //mongo db
  return res.status(201).json({ status: "Success" });
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  // });
}

module.exports = {
  handleAllUsers,
  handleGetUsersById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
