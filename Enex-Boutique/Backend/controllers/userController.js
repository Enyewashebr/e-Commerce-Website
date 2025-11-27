

// route for user login
const loginUser = async (req, res) =>{
    res.json({message: 'User logged in successfully'});

}

// route for user registration
const registerUser = async (req, res) =>{
res.json({message: 'User registered successfully'});
}

// route for admin login

const adminLogin = async (req, res) =>{
    res.json({message: 'Admin logged in successfully'});

}


export {loginUser, registerUser, adminLogin};
