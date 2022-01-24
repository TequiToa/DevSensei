import express from "express";
import { test } from "../controllers/gestionUser.js";
const router = express.Router();

router.get("/", () => {
  console.log("🤖 : /// ");
  test();
});

export default router;
