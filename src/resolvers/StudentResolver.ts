import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import Student from "../schemas/Student";
import StudentModel from "../models/StudentModel";
import { CreateStudentInput } from "../dtos/inputs/createStudentInput";
import { ICourse } from "../interfaces/ICourse";
import CourseResolver from "./CourseResolver";
import CourseModel from "../models/CourseModel";
import mongoose from "mongoose";

@Resolver(() => Student)
class StudentResolver {
    
    @Query(() => [Student], {name: 'getStudents'})
    async findStudents() {
        const students = await StudentModel.find().populate('courses').exec();
        return students;
    }
    
    @Mutation(() => [Student], {name: 'createStudent'})
    async createStudent(@Arg('data', () => CreateStudentInput) data:  CreateStudentInput) {

    const Student = new StudentModel({
      name: data.name,
      email: data.email,
      age: data.age,
    });
    await Student.save();
        return [Student];
    }

    @Mutation(() => Student, { name: 'registerStudentToCourse' })
    async registerStudentToCourse(
        @Arg('studentId', () => ID) studentId: string,
        @Arg('courseId', () => ID) courseId: string
    ) {
        const student = await StudentModel.findById(studentId).exec();
        if (!student) {
            throw new Error('Student not found');
        }

        const course = await CourseModel.findById(courseId).exec();
        if (!course) {
            throw new Error('Course not found');
        }

        if (!student.courses?.includes(course)) {
            student.courses?.push(course);
            await student.save();
        }

        if (!course.students?.includes(student)) {
            course.students?.push(student);
            await course.save();
        }

        return student;
    }

    @Query(() => Student, { name: 'getStudentById' })
    async getStudentById(@Arg('id', () => ID) id: string[]) {
        const studentId = id.map((id) => new mongoose.Types.ObjectId(id));
        const student = await StudentModel.find({ _id: studentId }).exec();
        return student;
    }
}

export default StudentResolver;