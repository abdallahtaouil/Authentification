const { body, validationResult } = require("express-validator"); //verify the email giving the condition for it and the password as
const RegisterValidator = [
  body("email", "the email format is not correct").isEmail(),
  body(
    "password",
    "the minimum length of password is 8 character and must contain at least one uppercase"
  ).isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
]
const Loginvalidation=[
body("email","the email format is not correct").isEmail()
]
const validation=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.isEmpty()){
        next()
    }else{
        res.status(400).send({errors:errors.array()})
    }
};
module.exports={Loginvalidation,RegisterValidator,validation}

