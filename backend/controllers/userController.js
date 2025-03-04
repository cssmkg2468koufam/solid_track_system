const bcrypt = require("bcryptjs");
const { createCustomer} = require("../models/userModel");

const registerCustomer = async (req, res) => {
    const {fullName, email, phone, password, agree_terms} = req.body;
    if (!fullName || !email || !phone || !password) {
        return res.status(400).json({error: "Please fill all fields"});
    }

    try{
        const password_hash = await bcrypt.hash(password, 10);
        await createCustomer(fullName, email, phone, password_hash, agree_terms);
        res.status(201).json({message: "User created successfully"});
    }
    catch(err){    
        console.error("Error registering customer:",err);
        res.status(500).json({error: "Internal Server error"});
    }
}

module.exports = {registerCustomer};