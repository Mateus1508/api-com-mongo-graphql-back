import { IStudent } from "./IStudent";

export interface ICurse {
    id: string;
    name: string;
    description: string;
    durationHours: Date;
    students?: IStudent[];
}