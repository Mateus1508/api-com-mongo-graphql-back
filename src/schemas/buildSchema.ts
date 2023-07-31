import { buildSchema } from "type-graphql";
import Course from "./Course";
import Student from "./Student";

const schema = async () => await buildSchema({
    resolvers: [Course, Student]
})

export default schema;