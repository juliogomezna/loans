import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { SERVER_URL } from '../../utils/constants';
@Injectable()
export class UserApiService {

    constructor(private httpClient: HttpClient) {
    }

    public getAllUser(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${SERVER_URL}/api/users`);
    }

    public postUserCredit(user: User): Observable<User> {
        return this.httpClient.post<User>(`${SERVER_URL}/api/users`, user);
    }

}
