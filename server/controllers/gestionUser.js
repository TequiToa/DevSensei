import userModel from "../models/userModel.js";

export const test = async () => {
  const newUser = new userModel({
    username: "test",
    password: "test",
    mail: "test@test.com",
  });

  const creation = await newUser.save();
};
