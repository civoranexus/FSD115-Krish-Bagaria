import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../controllers/userController.js";

let userRoutes = express.Router();

console.log("✅ User routes loaded");

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);

export default userRoutes;
