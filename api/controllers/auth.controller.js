import User from "../models/user.model.js"
export const register = async (req,res)=>{

    try {
        const newUser= new User(req.body)
        await newUser.save();
        res.status(201).send("User has beend created")
    } catch (error) {
        res.status(500).send("Something went wrong")
    }
}

export const login = async (req,res)=>{
    
}

export const logout = async (req,res)=>{
    
}