import userModel from '../models/userModel.js';
import validator from 'validator';

// route for user login
const loginUser = async (req, res) =>{
    res.json({message: 'User logged in successfully'});

}

// route for user registration
const registerUser = async (req, res) =>{
try {
    const {name, email, password} = req.body;
    // checking user already exists or not
    const exists = await userModel.findOne({email});

    if(exists){
        return res.json({success:false, message: 'User already exists'});
    }

    // validating email format and strong password
    if (!validator.isEmail(email)) {

return res.json({success:false, message: 'Please enter a valid email address'});
    }
    if (password.length < 8) {
        
    }

} catch (error) {
    
}
}

// route for admin login

const adminLogin = async (req, res) =>{
    res.json({message: 'Admin logged in successfully'});

}


export {loginUser, registerUser, adminLogin};
