import mongoose from "mongoose";

const AuthSchema = mongoose.Schema(
{
    email:{
        type: String,

        required:true,
        trim:true,
        unique:true 
    },
    password:{
        type: String,
        required:true,
    },
    firstName:{
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone:{
        type:String
    },
    userType:{
        type:String,
        enum:["admin" , "teacher" , "student"]
    }
},
{
    timestamps:true
}


);

const authModel = mongoose.model("auth", AuthSchema)
export default authModel
