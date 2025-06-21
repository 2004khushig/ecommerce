import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js"; 

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser = async (req, res) => {
    try{
        const{ email, password } = req.body;
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({ success: false, message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        }
        else{
            res.json({ success: false, message: "Invalid credentials" });
        }

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const registerUser = async (req, res) => {  
    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser=new userModel({
            name,
            email,
            password: hashedPassword,
        })
        const user=await newUser.save();
        const token=createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const adminLogin = async (req, res) => {
    // admin login logic
};

export { loginUser, registerUser, adminLogin };
