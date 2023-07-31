import { Field, ID, ObjectType } from "type-graphql";
import { ICurse } from "../interfaces/ICurse";
import { IStudent } from "../interfaces/IStudent";

@ObjectType()
class Student implements IStudent {

    @Field(type => ID, {nullable: true})
    id: string;

    @Field()
    name: string;

    @Field()
    age: number;

    @Field({nullable: true})
    curses?: ICurse[];

}

export default Student;