import mongoose from "mongoose";


export const connectDB = async ()=>{

    try{
         mongoose.connect("mongodb+srv://mhuzaif523:huzaif@contactmanagementapp.wgccmsf.mongodb.net/?retryWrites=true&w=majority")
 console.log("MongoDB connected")
    }
    catch(err){
console.log(err)
    }


}