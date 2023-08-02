import { ICourse } from "./ICourse";

export interface IStudent {
    id?: string;
    name: string;
    email: string;
    age: number;
    courses?: ICourse[];
}