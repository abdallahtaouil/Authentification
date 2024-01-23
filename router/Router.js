const express = require("express");
const { Register, login } = require("../controller/controlers");
const { Loginvalidation, validation, RegisterValidator } = require("../middleware/Validation");
const userRouter = express.Router();
userRouter.post("/Register",RegisterValidator,validation, Register);
userRouter.post("/login",Loginvalidation,validation,login)
module.exports = userRouter;
