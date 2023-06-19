import formModel from "../models/formModel.js";
import JWT from 'jsonwebtoken';

export const formSubmission = async (req, res) => {
    try {
        const { name,email, phone,address_1,address_2,city,state,pincode,country,geolocation,single_file,multi_file } = req.body;
        const user = await new formModel({name,email, phone,address_1,address_2,city,state,pincode,country,geolocation,single_file,multi_file }).save();
        res.status(201).send({
            success: true,
            message: 'Successfully Submitted',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in Submission',
            error
        })  
    }
}