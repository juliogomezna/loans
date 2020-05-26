import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/commons/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/commons/services/loan.service';

@Component({
    selector: 'app-loan-detail',
    templateUrl: './loan-detail.component.html',
    styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit{

    user: User;
    constructor(private route: ActivatedRoute,
        private loanService: LoanService ,
        private router: Router) { }


    ngOnInit(){
        this.user = window.history.state.user;
    }
}
