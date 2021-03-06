import {Component} from '@angular/core';
import { User } from 'src/app/commons/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/commons/services/loan.service';

@Component({
    selector: 'app-loan-view',
    templateUrl: './loan-list.component.html',
    styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent {

    users: User[];

    constructor(private router: Router, private loanService: LoanService, private route: ActivatedRoute) { }

    allSelected = false;

    ngOnInit() {
        this.users=[];
        this.loanService.getAllCredits().subscribe(
            users => {
                this.users = users;
                console.log(this.users);
            }
        );
    }

    goToDetailUser(userSelected) {
        console.log("going to detail")
        console.log(userSelected);
        this.router.navigate([userSelected.dni], { state: {user: userSelected},
         relativeTo: this.route});
    }
}