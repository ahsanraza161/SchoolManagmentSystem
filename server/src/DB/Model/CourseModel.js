import mongoose from "mongoose";

const CourseSchema = mongoose.Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        
        instructorID: {
            type: mongoose.Types.ObjectId,
            ref:'auth',
            required: true,
            name: String,
        },
        duration: {
            type: String,
            required: true,
        } 
    }
)


export default CourseSchema