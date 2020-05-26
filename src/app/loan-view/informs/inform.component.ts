import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/commons/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/commons/services/loan.service';
import { Credit } from 'src/app/commons/models/credit.model';

@Component({
    selector: 'app-inform',
    templateUrl: './inform.component.html',
    styleUrls: ['./inform.component.scss']
})
export class informComponent implements OnInit{
    credits: Credit[];
    stateSort: string = 'none';

    constructor(private router: Router, private loanService: LoanService, private route: ActivatedRoute) { }

    allSelected = false;

    ngOnInit() {
        this.credits=[];
        this.loanService.getAllCredits().subscribe(
            (users:User[]) => {
                users.forEach(user => {
                    user.credits.forEach(credit => {
                        credit.user=user;
                        this.credits.push(credit)
                    })
                })
            }
        );
    }

    sortColumn1() {
        if (this.stateSort === 'asc') {
            this.stateSort = 'dsc';
            this.credits.sort((val1, val2) => {
                if (val1.state < val2.state) {
                    return -1;
                } else if (val1.state > val2.state) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (this.stateSort === 'none' || this.stateSort === 'dsc') {
            this.stateSort = 'asc';
            this.credits.sort((val1, val2) => {
                if (val1.state > val2.state) {
                    return -1;
                } else if (val1.state < val2.state) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }



    goToDetailUser(userSelected) {
        console.log("going to detail")
        console.log(userSelected);
        this.router.navigate([userSelected.dni], { state: {user: userSelected},
         relativeTo: this.route});
    }
}