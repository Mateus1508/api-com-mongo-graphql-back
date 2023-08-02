import { Field, ID, ObjectType } from "type-graphql";
import { ICourse } from "../interfaces/ICourse";
import Student from "./Student";
import { IStudent } from "../interfaces/IStudent";

@ObjectType()
class Course implements ICourse {
    
    @Field(() => ID)
    id: string;
    
    @Field()
    name: string;
    
    @Field()
    institution: string;
    
    @Field()
    description: string;

    @Field()
    durationHours: number;

    @Field(() => [Student]) 
    students?: Student[];
    
    @Field(() => [ID],  { nullable: true }) 
    studentsId?: string[];
}

export default Course;


