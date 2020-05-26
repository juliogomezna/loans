import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../../utils/constants';
import { Bank } from '../models/bank.model';
@Injectable()
export class BankApiService {

    constructor(private httpClient: HttpClient) {
    }

    public getBankInfo(): Observable<Bank> {
        return this.httpClient.get<Bank>(`${SERVER_URL}/api/bank`);
    }

}
