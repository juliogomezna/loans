import {Injectable} from '@angular/core';
import { UserApiService } from '../apis/Users.api';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class LoanService {

    constructor(private userApiService: UserApiService) {
    }

    getAllCredits(): Observable<User[]> {
        return this.userApiService.getAllUser();
    }

    saveUserCredit(user: User): Observable<User> {
        return this.userApiService.postUserCredit(user);
    }

}
