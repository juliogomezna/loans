import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { SERVER_URL } from '../../utils/constants';
@Injectable()
export class UserApiService {

    constructor(private httpClient: HttpClient) {
    }

    public getAllUser(): Observable<any[]>{
        return this.httpClient.get<any[]>(`${SERVER_URL}/api/cats`);
    }
}
