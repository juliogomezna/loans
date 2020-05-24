import { Credit } from './credit.model';

export class User {
    id: number;
    name: string;
    mail: string;
    dni: string;
    credits: Credit[];
}
