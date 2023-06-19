import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';
export const login=async(req,res)=>{
   try{
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).send({
            success: false,
            message: "Invalid email or password",
        })
   }
   const user = await userModel.findOne({ email ,password});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }
    const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(200).send({
        success: true,
        message: "loggedIn successfully",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
        token
    })
}
    catch(e){
        console.log(e)
    }

}
export const registerController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await new userModel({email,password }).save();
        res.status(201).send({
            success: true,
            message: 'user registered successfully',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        })  
    }
}
