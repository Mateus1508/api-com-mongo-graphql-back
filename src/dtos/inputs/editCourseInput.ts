import { Field, ID, InputType } from "type-graphql";

@InputType()
export class EditCourseInput {
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    institution?: string;
    @Field({ nullable: true })
    description?: string;
    @Field({ nullable: true })
    durationHours?: Number;
    @Field(() => [ID],  { nullable: true })
    studentsId?: string[];
}