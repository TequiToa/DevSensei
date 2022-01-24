import express from "express";
import {
  registerUser,
  loginUser,
  getAllUser,
  patchUser,
  deleteUser,
} from "../controllers/gestionUser.js";
const router = express.Router();

router.get("/", () => {
  console.log("🤖 : /// ");
});

router.post("/registerUser", registerUser);

router.post("/loginUser", loginUser);

//! securiser l'acces
router.get("/getAllUser", getAllUser);

router.patch("/patchUser", patchUser);

router.delete("/deleteUser", deleteUser);

export default router;
