import { IStudent } from "./IStudent";

export interface ICourse {
    id?: string;
    name: string;
    institution: string;
    description: string;
    durationHours: Number;
    students?: IStudent[];
}