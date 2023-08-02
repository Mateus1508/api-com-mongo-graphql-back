import mongoose from "mongoose";
import { IStudent } from "../interfaces/IStudent";

const { Schema } = mongoose;

export const studentSchema = new Schema<IStudent>({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    courses: [{
        type: mongoose.Types.ObjectId,
        ref: 'course'
    }]
},
{
    timestamps: true
}
);

const StudentModel = mongoose.model('student', studentSchema);

export default StudentModel;