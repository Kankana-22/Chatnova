import express from "express";

import {
  login,
  logout,
  signup,
  onboard,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();



router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);



// Forgot password
router.post("/forgot-password", forgotPassword);


// Reset password
router.post("/reset-password/:token", resetPassword);



// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});


export default router;