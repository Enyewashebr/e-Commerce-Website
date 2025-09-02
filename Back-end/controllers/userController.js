import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';

// Rout for user login
const loginUser = async (req, res) =>{}


// Rout for user registration
const registerUser = async (req, res) =>{
    try{
        const { name, email, password } = req.body;

        // checking if user already exists
        const exists = await userModel.findOne({ email});
        if(exists){
            return res.json({success:false, message: "User already exists" });
        }

        // validating email format and forming strong password

        if(!validator.isEmail(email)){
            return res.json({success:false, message: "please enter the valid Email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();
        

    }catch(error){

    }
}


// Rout for admin login
const adminLogin = async (req, res) =>{}
export { loginUser, registerUser, adminLogin };
