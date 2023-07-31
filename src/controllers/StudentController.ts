import { Query, Resolver } from "type-graphql";
import Student from "../schemas/Student";

@Resolver(Student)
class StudentController {
    
    @Query(() => [Student], {name: 'students'})
    async findStudents() {
        const students = await 
        return true;
    }

}

export default StudentController;