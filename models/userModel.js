import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
    }
})
export default new mongoose.model("User",userSchema)    
