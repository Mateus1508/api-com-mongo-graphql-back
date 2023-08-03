import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import Course from "../schemas/Course";
import CourseModel from "../models/CourseModel";
import { CreateCourseInput } from "../dtos/inputs/createCourseInput";
import { ApolloError } from "apollo-server";
import { EditCourseInput } from "../dtos/inputs/editCourseInput";

@Resolver(() => Course)
class CourseResolver {
    
    @Query(() => [Course], {name: 'getCourses'})
    async findCourses() {
        const courses = await CourseModel.find().populate('students').exec();
        return courses;
    }
    
    @Query(() => Course)
    async getCourseById(@Arg('id', () => ID) id: string) {
        const course = await CourseModel.findById(id).exec();
        if (course === null || course === undefined) {
            throw new ApolloError("Course not found!")
        }
        return course;
    }
    
    @Mutation(() => [Course], {name: 'createCourse'})
    async createCourse(@Arg('data', () => CreateCourseInput) data:  CreateCourseInput) {
        const course = new CourseModel({
        institution: data.institution,
        name: data.name,
        description: data.description,
        durationHours: data.durationHours,
        });

        await course.save();
        return [course];
    }

    @Mutation(() => Course)
    async updateCourse(@Arg('id') id: string, @Arg('data') data: EditCourseInput) {
        const course = await CourseModel.findByIdAndUpdate(id, data, { new: true });
        return course;
  }

    @Mutation(() => Course)
    async deleteCourseById(@Arg('id', () => ID) id: string) {
        const course = await CourseModel.findByIdAndDelete(id);
        if (course === null || course === undefined) {
            throw new ApolloError("Course not found!")
        }
        return course;
    }
}

export default CourseResolver;