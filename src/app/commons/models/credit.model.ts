import { FdDate } from '@fundamental-ngx/core';
import { User } from './user.model';

export class Credit {
    id: number;
    value: number;
    state: string;
    paid: boolean;
    dateRequested: FdDate;
    possiblePayDate: FdDate;
    user?: User; 
}
