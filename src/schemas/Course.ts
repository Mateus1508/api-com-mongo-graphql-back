import { Field, ID, ObjectType } from "type-graphql";
import { ICurse } from "../interfaces/ICurse";
import { IStudent } from "../interfaces/IStudent";

@ObjectType()
class Course implements ICurse {

    @Field(type => ID, {nullable: true})
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    durationHours: Date;

    @Field({nullable: true})
    students?: IStudent[];
}

export default Course;