const Users = require("../model/Model");
const jwt = require("jsonwebtoken");
const bcript = require("bcrypt");
exports.Register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const found = await Users.findOne({ email });
    if (found) {
      res.status(400).send({ message: "this email exists already" });
    } else {
      const Newpassword = bcript.hashSync(password, 10); //10parameter is salt used to make it crypted 10times
      const user = new Users({ email, name, password: Newpassword });
      const secretKey = "hellomyfriend";
      const token = jwt.sign({ id: user._id }, secretKey); //le token va remplacer le nom et l'email (l'identifiant sera identifié aver le token)
      await user.save();
      res.status(200).send({ message: "user added successfully", user, token });
    }
  } catch (error) {
    if (error) throw error;
    res.status(500).send(error);
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const found = await Users.findOne({ email });
    if (!found) {
      res.status(400).send({ message: "user dosen't exist" });
    } else {
      //compare the field password to the password of the found email stored in the database
      const comparedpassword = bcript.compareSync(password, found.password);
      if (!comparedpassword) {
        res.status(400).send({ message: "invalid password" });
      } else {
        const secretKey = "hellomyfriend";
        const token = jwt.sign({ id: found._id }, secretKey);
        res
          .status(200)
          .send({ message: "logged in successfully", user: found, token });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
