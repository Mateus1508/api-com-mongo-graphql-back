import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateStudentInput {
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    age: number;
    @Field(() => [ID],  { nullable: true })
    coursesId?: string[];
}