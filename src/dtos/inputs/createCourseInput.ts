import { Field, ID, InputType } from "type-graphql";

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