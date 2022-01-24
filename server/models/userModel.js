import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: Object,
    required: true,
  },
  firstName: String,
  lastName: String,
  avatar: Object,
  admin: Boolean,
  acceptedConditions: Boolean,
  validateAccount: Boolean,
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
