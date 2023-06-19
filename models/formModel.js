import mongoose from 'mongoose'

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
    },
    address_1:{
        type:String,
    },
    address_1:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    pincode:{
        type:Number,
    },
    country:{
        type:String,
    },
    geolocation:{
        type:String,
    },
    single_file:{
        type:String,
    },
    multiple_files: {
        type: [String],
        required: true,
        validate: {
          validator: function (files) {
            return files.length <= 5;
          },
          message: 'Maximum 5 files allowed!',
        },
      },
    
})
export default new mongoose.model("form",formSchema)   