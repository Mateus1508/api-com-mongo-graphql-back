import { Field, ID, InputType } from "type-graphql";

@InputType()
export class EditStudentInput {
    @Field({ nullable: true })
    name: string;
    @Field({ nullable: true })
    email: string;
    @Field({ nullable: true })
    age: number;
    @Field(() => [ID],  { nullable: true })
    coursesId?: string[];
}