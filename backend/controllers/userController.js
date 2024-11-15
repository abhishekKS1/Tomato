import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//generate JWT token
const createToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET);
};

//login user

const loginUser = async (req, res) => {
   const { email, password } = req.body;
   try {
      //checking if user exists
      const user = await userModel.findOne({ email });

      if (!user) {
         return res.json({ success: false, message: "User does not exist" });
      }

      //comparing password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.json({ success: false, message: "Invalid credentials" });
      }

      const token = createToken(user._id);
      res.json({ success: true, token });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
};



//register user

const registerUser = async (req, res) => {
   const { name, password, email } = req.body;
   try {
      //checking if use exists already
      const exists = await userModel.findOne({ email });
      if (exists)
         return res.json({ success: false, message: "User already exists" });

      //validating email format and strong password
      if (!validator.isEmail(email)) {
         return res.json({
            success: false,
            message: "Please enter a valid email",
         });
      }

      if (password.length < 8) {
         return res.json({
            success: false,
            message: "Enter a strong password(minimum 8 characters)",
         });
      }

      //hashing user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new userModel({
         name: name,
         email: email,
         password: hashedPassword,
      });

      const user = await newUser.save();
      const token = createToken(user._id);
      res.json({ success: true, token });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
};

export { loginUser, registerUser };
