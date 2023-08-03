import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import Student from "../schemas/Student";
import StudentModel from "../models/StudentModel";
import { CreateStudentInput } from "../dtos/inputs/createStudentInput";
import { ICourse } from "../interfaces/ICourse";
import CourseResolver from "./CourseResolver";
import CourseModel from "../models/CourseModel";
import mongoose from "mongoose";
import { ApolloError } from "apollo-server";
import { EditStudentInput } from "../dtos/inputs/editStudentInput";

@Resolver(() => Student)
class StudentResolver {
    
    @Query(() => [Student], {name: 'getStudents'})
    async findStudents() {
        const students = await StudentModel.find().populate('courses').exec();
        return students;
    }

    @Query(() => Student, { name: 'getStudentById' })
    async getStudentById(@Arg('id', () => ID) id: string[]) {
        const studentId = id.map((id) => new mongoose.Types.ObjectId(id));
        const student = await StudentModel.find({ _id: studentId }).exec();
        return student;
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

    @Mutation(() => Student)
    async updateStudent(@Arg('id') id: string, @Arg('data') data: EditStudentInput) {
        const student = await StudentModel.findByIdAndUpdate(id, data, { new: true });
        return student;
  }

    @Mutation(() => Student)
    async deleteStudentById(@Arg('id', () => ID) id: string) {
        const student = await StudentModel.findByIdAndDelete(id);
        if (student === null || student === undefined) {
            throw new ApolloError("Student not found!")
        }
        return student;
    }
}

export default StudentResolver;