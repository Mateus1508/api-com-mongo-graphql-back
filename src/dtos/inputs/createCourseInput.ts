import { Field, ID, InputType } from "type-graphql";
import Student from "../../schemas/Student";
import { IStudent } from "../../interfaces/IStudent";

@InputType()
export class CreateCourseInput {
    @Field()
    name: string;
    @Field()
    institution: string;
    @Field()
    description: string;
    @Field()
    durationHours: Number;
    @Field(() => [ID],  { nullable: true })
    studentsId?: string[];
}