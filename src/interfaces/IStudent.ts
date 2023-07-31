import { ICurse } from "./ICurse";

export interface IStudent {
    id: string;
    name: string;
    age: number;
    curses?: ICurse[];
}