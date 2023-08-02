import { Field, ID, ObjectType } from "type-graphql";
import { ICourse } from "../interfaces/ICourse";
import { IStudent } from "../interfaces/IStudent";
import Course from "./Course";

@ObjectType()
class Student implements IStudent {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;
    
    @Field()
    email: string;
    
    @Field()
    age: number;

    @Field(() => [Course])
    courses?: ICourse[];

    @Field(() => [ID],  { nullable: true })
    coursesId?: string[];

}

export default Student;