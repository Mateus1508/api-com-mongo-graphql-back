import mongoose from "mongoose";
import { ICourse } from "../interfaces/ICourse";


const { Schema } = mongoose;

export const courseSchema = new Schema<ICourse>({
    institution: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    durationHours: {
        type: Number,
        required: true
    },
    students: [{
        type: mongoose.Types.ObjectId,
        ref: 'student'
    }]
},
{
    timestamps: true
}
);

const CourseModel = mongoose.model('course', courseSchema);

export default CourseModel;