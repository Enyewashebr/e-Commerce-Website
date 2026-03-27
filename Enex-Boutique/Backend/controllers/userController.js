import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({message: "Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password"})
        }
    
        const token = createToken(user._id)
        res.status(200).json({message: "Login successful", token})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server error"})
    }

}


// route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // check if user already exists
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }
        // validating email format and strength of password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (!validator.isLength(password, { min: 8 })) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }
        // hashing the password before saving to database
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id)
        res.status(201).json({message: "User registered successfully", token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server error"})
    }
}

// route for admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }
