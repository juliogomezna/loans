import { FdDate } from '@fundamental-ngx/core';

export class Credit {
    id: number;
    value: number;
    state: string;
    paid: boolean;
    dateRequested: FdDate;
    possiblePayDate: FdDate;
}
